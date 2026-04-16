__d(
  "WAWebWindowsHybridBridgeMediaFiles",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.isCachedMediaFileExist = function (t, n) {
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.media_files.send.is_cached_media_file_exist",
            ),
            this.$1.isCachedMediaFileExist(t, n)
          );
        }),
        (t.tryOpenCachedMediaFile = function (t, n) {
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.media_files.send.try_open_cached_media_file_file",
            ),
            this.$1.tryOpenCachedMediaFileFile(t, n)
          );
        }),
        (t.prepareForMediaFileSaving = function (t, n, o) {
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.media_files.send.prepare_for_media_file_saving",
            ),
            this.$1.prepareForMediaFileSaving(t, n, o)
          );
        }),
        (t.waitTillMediaDownloadCompletes = function (t, n, o) {
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.media_files.send.wait_till_media_download_completes",
            ),
            this.$1.waitTillMediaDownloadCompletes(t, n, o)
          );
        }),
        (t.selectFolderForBulkMediaSaving = function () {
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.media_files.send.select_folder_for_bulk_media_saving",
            ),
            this.$1.selectFolderForBulkMediaSaving()
          );
        }),
        (t.prepareForZipArchiveSavingAndUnarchiveToFolder = function (
          t,
          n,
          o,
          a,
        ) {
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.media_files.send.prepare_for_zip_archive_saving_and_unarchive_to_folder",
            ),
            this.$1.prepareForZipArchiveSavingAndUnarchiveToFolder(t, n, o, a)
          );
        }),
        (t.requestFileSystemDirectoryHandle = function (t) {
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.media_files.send.request_file_system_directory_handle",
            ),
            this.$1.requestFileSystemDirectoryHandle(t)
          );
        }),
        (t.tryCopyCachedMediaFile = function (t) {
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.media_files.send.try_copy_cached_media_file",
            ),
            this.$1.tryCopyCachedMediaFile(t)
          );
        }),
        (t.tryCopyCachedMediaFiles = function (t) {
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.media_files.send.try_copy_cached_media_files",
            ),
            this.$1.tryCopyCachedMediaFiles(t)
          );
        }),
        e
      );
    })();
    l.WAWebWindowsHybridBridgeMediaFiles = e;
  },
  98,
);
