__d(
  "WAWebWindowsHybridBridgeMediaFiles",
  ["WAWebODS", "WAWebWindowsHybridBridgeTrace"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.isCachedMediaFileExist = function (t, n) {
          var e = this;
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.media_files.send.is_cached_media_file_exist",
            ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "mediaFiles",
                method: "isCachedMediaFileExist",
                type: "sync",
              },
              function () {
                return e.$1.isCachedMediaFileExist(t, n);
              },
            )
          );
        }),
        (t.tryOpenCachedMediaFile = function (t, n) {
          var e = this;
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.media_files.send.try_open_cached_media_file_file",
            ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "mediaFiles",
                method: "tryOpenCachedMediaFileFile",
                type: "sync",
              },
              function () {
                return e.$1.tryOpenCachedMediaFileFile(t, n);
              },
            )
          );
        }),
        (t.prepareForMediaFileSaving = function (t, n, a) {
          var e = this;
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.media_files.send.prepare_for_media_file_saving",
            ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "mediaFiles",
                method: "prepareForMediaFileSaving",
                type: "sync",
              },
              function () {
                return e.$1.prepareForMediaFileSaving(t, n, a);
              },
            )
          );
        }),
        (t.waitTillMediaDownloadCompletes = function (t, n, a) {
          var e = this;
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.media_files.send.wait_till_media_download_completes",
            ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "mediaFiles",
                method: "waitTillMediaDownloadCompletes",
                type: "sync",
              },
              function () {
                return e.$1.waitTillMediaDownloadCompletes(t, n, a);
              },
            )
          );
        }),
        (t.selectFolderForBulkMediaSaving = function () {
          var e = this;
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.media_files.send.select_folder_for_bulk_media_saving",
            ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "mediaFiles",
                method: "selectFolderForBulkMediaSaving",
                type: "sync",
              },
              function () {
                return e.$1.selectFolderForBulkMediaSaving();
              },
            )
          );
        }),
        (t.prepareForZipArchiveSavingAndUnarchiveToFolder = function (
          t,
          n,
          a,
          i,
        ) {
          var e = this;
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.media_files.send.prepare_for_zip_archive_saving_and_unarchive_to_folder",
            ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "mediaFiles",
                method: "prepareForZipArchiveSavingAndUnarchiveToFolder",
                type: "sync",
              },
              function () {
                return e.$1.prepareForZipArchiveSavingAndUnarchiveToFolder(
                  t,
                  n,
                  a,
                  i,
                );
              },
            )
          );
        }),
        (t.requestFileSystemDirectoryHandle = function (t) {
          var e = this;
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.media_files.send.request_file_system_directory_handle",
            ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "mediaFiles",
                method: "requestFileSystemDirectoryHandle",
                type: "sync",
              },
              function () {
                return e.$1.requestFileSystemDirectoryHandle(t);
              },
            )
          );
        }),
        (t.tryCopyCachedMediaFile = function (t) {
          var e = this;
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.media_files.send.try_copy_cached_media_file",
            ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "mediaFiles",
                method: "tryCopyCachedMediaFile",
                type: "sync",
              },
              function () {
                return e.$1.tryCopyCachedMediaFile(t);
              },
            )
          );
        }),
        (t.tryCopyCachedMediaFiles = function (t) {
          var e = this;
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.media_files.send.try_copy_cached_media_files",
            ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "mediaFiles",
                method: "tryCopyCachedMediaFiles",
                type: "sync",
              },
              function () {
                return e.$1.tryCopyCachedMediaFiles(t);
              },
            )
          );
        }),
        e
      );
    })();
    l.WAWebWindowsHybridBridgeMediaFiles = e;
  },
  98,
);
