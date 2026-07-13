__d(
  "WAWebWindowsHybridBridgeMediaFiles.v2609",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.isCachedMediaFileExist = function (t, n) {
          return this.$1.isCachedMediaFileExist(t, n);
        }),
        (t.tryOpenCachedMediaFile = function (t, n) {
          return this.$1.tryOpenCachedMediaFileFile(t, n);
        }),
        (t.prepareForMediaFileSaving = function (t, n, r) {
          return this.$1.prepareForMediaFileSaving(t, n, r);
        }),
        (t.waitTillMediaDownloadCompletes = function (t, n, r) {
          return this.$1.waitTillMediaDownloadCompletes(t, n, r);
        }),
        (t.selectFolderForBulkMediaSaving = function () {
          return this.$1.selectFolderForBulkMediaSaving();
        }),
        (t.prepareForZipArchiveSavingAndUnarchiveToFolder = function (
          t,
          n,
          r,
          o,
        ) {
          return this.$1.prepareForZipArchiveSavingAndUnarchiveToFolder(
            t,
            n,
            r,
            o,
          );
        }),
        (t.requestFileSystemDirectoryHandle = function (t) {
          return this.$1.requestFileSystemDirectoryHandle(t);
        }),
        (t.tryCopyCachedMediaFile = function (t) {
          return this.$1.tryCopyCachedMediaFile(t);
        }),
        (t.tryCopyCachedMediaFiles = function (t) {
          return this.$1.tryCopyCachedMediaFiles(t);
        }),
        e
      );
    })();
    i.WAWebWindowsHybridBridgeMediaFiles_v2609 = e;
  },
  66,
);
