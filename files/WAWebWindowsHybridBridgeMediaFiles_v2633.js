__d(
  "WAWebWindowsHybridBridgeMediaFiles.v2633",
  [
    "Promise",
    "WAWebODS",
    "WAWebWindowsHybridBridgeTrace",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3e4,
      u = 0,
      c = 1,
      d = 2,
      m = (function () {
        function t(e, t) {
          var n = this;
          ((this.$2 = new Map()),
            (this.$1 = e),
            t == null ||
              t.addEventListener("sharedbufferreceived", function (e) {
                n.$3(e);
              }));
        }
        var a = t.prototype;
        return (
          (a.isCachedMediaFileExist = function (t, n) {
            var e = this;
            return (
              r("WAWebODS").incr(
                "web.hybrid.bridge.media_files.send.is_cached_media_file_exist",
              ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "mediaFiles",
                  method: "isCachedMediaFileExist",
                  type: "async",
                },
                function () {
                  return e.$1.isCachedMediaFileExist(t, n);
                },
              )
            );
          }),
          (a.tryOpenCachedMediaFile = function (t, n) {
            var e = this;
            return (
              r("WAWebODS").incr(
                "web.hybrid.bridge.media_files.send.try_open_cached_media_file_file",
              ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "mediaFiles",
                  method: "tryOpenCachedMediaFileFile",
                  type: "async",
                },
                function () {
                  return e.$1.tryOpenCachedMediaFileFile(t, n);
                },
              )
            );
          }),
          (a.prepareForMediaFileSaving = function (t, n, a) {
            var e = this;
            return (
              r("WAWebODS").incr(
                "web.hybrid.bridge.media_files.send.prepare_for_media_file_saving",
              ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "mediaFiles",
                  method: "prepareForMediaFileSaving",
                  type: "async",
                },
                function () {
                  return e.$1.prepareForMediaFileSaving(t, n, a);
                },
              )
            );
          }),
          (a.waitTillMediaDownloadCompletes = function (t, n, a) {
            var e = this;
            return (
              r("WAWebODS").incr(
                "web.hybrid.bridge.media_files.send.wait_till_media_download_completes",
              ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "mediaFiles",
                  method: "waitTillMediaDownloadCompletes",
                  type: "async",
                },
                function () {
                  return e.$1.waitTillMediaDownloadCompletes(t, n, a);
                },
              )
            );
          }),
          (a.selectFolderForBulkMediaSaving = function () {
            var e = this;
            return (
              r("WAWebODS").incr(
                "web.hybrid.bridge.media_files.send.select_folder_for_bulk_media_saving",
              ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "mediaFiles",
                  method: "selectFolderForBulkMediaSaving",
                  type: "async",
                },
                function () {
                  return e.$1.selectFolderForBulkMediaSaving();
                },
              )
            );
          }),
          (a.prepareForZipArchiveSavingAndUnarchiveToFolder = function (
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
                  type: "async",
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
          (a.requestFileSystemDirectoryHandle = function (t) {
            var e = this;
            return (
              r("WAWebODS").incr(
                "web.hybrid.bridge.media_files.send.request_file_system_directory_handle",
              ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "mediaFiles",
                  method: "requestFileSystemDirectoryHandle",
                  type: "async",
                },
                function () {
                  return e.$1.requestFileSystemDirectoryHandle(t);
                },
              )
            );
          }),
          (a.tryCopyCachedMediaFile = function (t) {
            var e = this;
            return (
              r("WAWebODS").incr(
                "web.hybrid.bridge.media_files.send.try_copy_cached_media_file",
              ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "mediaFiles",
                  method: "tryCopyCachedMediaFile",
                  type: "async",
                },
                function () {
                  return e.$1.tryCopyCachedMediaFile(t);
                },
              )
            );
          }),
          (a.tryCopyCachedMediaFiles = function (t) {
            var e = this;
            return (
              r("WAWebODS").incr(
                "web.hybrid.bridge.media_files.send.try_copy_cached_media_files",
              ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "mediaFiles",
                  method: "tryCopyCachedMediaFiles",
                  type: "async",
                },
                function () {
                  return e.$1.tryCopyCachedMediaFiles(t);
                },
              )
            );
          }),
          (a.requestSharedBufferForMediaFile = function (a, i) {
            var t = this;
            r("WAWebODS").incr(
              "web.hybrid.bridge.media_files.send.try_request_shared_buffer_for_media_file",
            );
            var l = new (e || (e = n("Promise")))(function (e, n) {
              var o = window.setTimeout(function () {
                t.$2.delete(a) &&
                  n(r("err")("Timed out waiting for media-file shared buffer"));
              }, s);
              t.$2.set(a, { resolve: e, timeoutId: o });
            });
            return o("WAWebWindowsHybridBridgeTrace")
              .traceBridgeCall(
                {
                  bridge: "mediaFiles",
                  method: "tryRequestSharedBufferForMediaFile",
                  type: "async",
                },
                function () {
                  return t.$1.tryRequestSharedBufferForMediaFile(a, i);
                },
              )
              .then(
                function (e) {
                  if (!e)
                    throw (
                      t.$4(a),
                      r("err")(
                        "Failed to create shared buffer for media file open-with",
                      )
                    );
                  return l;
                },
                function (e) {
                  throw (t.$4(a), r("getErrorSafe")(e));
                },
              );
          }),
          (a.saveMediaFileFromSharedBuffer = function (t, n, a) {
            var e = this;
            return (
              r("WAWebODS").incr(
                "web.hybrid.bridge.media_files.send.save_media_file_from_shared_buffer",
              ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "mediaFiles",
                  method: "trySaveMediaFileFromSharedBuffer",
                  type: "async",
                },
                function () {
                  return e.$1.trySaveMediaFileFromSharedBuffer(t, n, a);
                },
              )
            );
          }),
          (a.saveCachedMediaFileAs = function (t, n) {
            var e = this;
            return (
              r("WAWebODS").incr(
                "web.hybrid.bridge.media_files.send.save_cached_media_file_as",
              ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "mediaFiles",
                  method: "trySaveCachedMediaFileAs",
                  type: "async",
                },
                function () {
                  return e.$1.trySaveCachedMediaFileAs(t, n);
                },
              )
            );
          }),
          (a.$3 = function (t) {
            if (
              t.additionalData != null &&
              t.additionalData.Source === "MediaFileSharedBuffer"
            ) {
              var e = t.additionalData.BufferId,
                n = e != null ? this.$2.get(e) : void 0;
              n != null &&
                (window.clearTimeout(n.timeoutId),
                this.$2.delete(e),
                n.resolve(t.getBuffer()));
            }
          }),
          (a.$4 = function (t) {
            var e = this.$2.get(t);
            e != null && (window.clearTimeout(e.timeoutId), this.$2.delete(t));
          }),
          t
        );
      })();
    ((l.SAVE_AS_SAVED_v2633 = u),
      (l.SAVE_AS_CANCELLED_v2633 = c),
      (l.SAVE_AS_FAILED_v2633 = d),
      (l.WAWebWindowsHybridBridgeMediaFiles_v2633 = m));
  },
  98,
);
