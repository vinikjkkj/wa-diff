__d(
  "VideoUploadFeatureDetector",
  ["UserAgent_DEPRECATED", "fileSlice"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return typeof r("fileSlice") == "function" && d();
    }
    function s() {
      return !o("UserAgent_DEPRECATED").firefox();
    }
    function u() {
      return "FileList" in window;
    }
    function c() {
      return "FileReader" in window && "DataView" in window;
    }
    function d() {
      return "FormData" in window;
    }
    ((l.supportsChunking = e),
      (l.supportsFullProgress = s),
      (l.supportsFileAPI = u),
      (l.supportsFileReading = c),
      (l.supportsXHR = d));
  },
  98,
);
