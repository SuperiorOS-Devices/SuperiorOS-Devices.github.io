import request from "../helpers/request";
import { fetchDownloadsCount } from "./sourceforge";
import { humanDate, humanSize } from "../helpers/utils";

const baseURL = "https://raw.githubusercontent.com/SuperiorOS-Devices";

// eslint-disable-next-line consistent-return
const fetchDevices = async () => {
  try {
    const res = await request(
      `${baseURL}/official_devices/eleven/devices.json`,
    );

    const brands = [];
    const devices = [];

    res.forEach(
      device => !brands.includes(device.brand) && brands.push(device.brand),
    );

    brands.forEach(brand => devices.push({
      name: brand,
      devices: res.filter(device => device.brand === brand),
    }));

    return devices;
  } catch (e) {
    console.log("devices fetch failed");
  }
};
const fetchChangelog = async (filename, codename) => {
  try {
    const res = await request(
      `${baseURL}/changelogs/eleven/xcalibur_${codename}.txt`,
      false,
    );

    return res.includes("404") ? "Changelog data no found" : res;
  } catch (err) {
    return "Changelog data no found";
  }
};

const fetchBuilds = async (codename) => {
  try {
    const res = await request(
      `${baseURL}/official_devices/eleven/${codename}.json`,
    );
    console.log(res);
    const promises = res.response
      .map(async (build) => {
        const downloads = await fetchDownloadsCount(build.filename, codename);
        const changelog = await fetchChangelog(build.filename, codename);

        return {
          ...build,
          size: humanSize(build.size),
          datetime: humanDate(build.datetime),
          md5: build.id,
          downloads,
          changelog,
        };
      })
      .reverse();

    return await Promise.all(promises);
  } catch (e) {
    return [];
  }
};

const fetchROMChangelog = async () => {
  const res = await request(
    "https://raw.githubusercontent.com/SuperiorOS-Devices/changelogs/eleven/changelogs.txt",
    false,
  );
  return res;
};

export { fetchDevices, fetchBuilds, fetchROMChangelog };
