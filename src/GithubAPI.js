export const API_URL = "https://api.github.com/repos/ranjian0/building_tools/releases"

export const BRANCHES = [
  {name: "Master", url:"https://github.com/ranjian0/building_tools/archive/refs/heads/master.zip"},
  {name: "Development", url:"https://github.com/ranjian0/building_tools/archive/refs/heads/dev.zip"}
]

function download_file(url) {
    // fake server request, getting the file url as response
    setTimeout(() => {
      const response = {
        file: url,
      };
      window.location.href = response.file;
    }, 100);
}

export function DownloadRelease(rel) {
    download_file(rel.assets[0].browser_download_url);
}

export function DownloadFile(url) {
    download_file(url);
}
