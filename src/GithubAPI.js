export const API_URL = " https://api.github.com/repos/ranjian0/building_tools/releases"


function download_file(url) {
    // fake server request, getting the file url as response
    setTimeout(() => {
      const response = {
        file: url,
      };
      window.location.href = response.file;
    }, 100)
}

export function DownloadRelease(rel) {
    download_file(rel.assets[0].browser_download_url)
}
