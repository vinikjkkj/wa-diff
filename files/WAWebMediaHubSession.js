__d(
  "WAWebMediaHubSession",
  [
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWamEnumEntryPointType",
    "WAWebWamEnumSurfaceCode",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {
          ((this.$1 = r("WAWebPonyfillsCryptoRandomUUID")()),
            (this.$2 = 0),
            (this.$3 = o(
              "WAWebWamEnumEntryPointType",
            ).ENTRY_POINT_TYPE.MAIN_SCREEN),
            (this.$4 = o("WAWebWamEnumSurfaceCode").SURFACE_CODE.MEDIA),
            (this.$5 = !1),
            this.initSessionId());
        }
        var t = e.prototype;
        return (
          (t.initSessionId = function () {
            ((this.$1 = this.newSessionId()), (this.$5 = !1));
          }),
          (t.newSessionId = function () {
            return (
              (this.$1 = r("WAWebPonyfillsCryptoRandomUUID")()),
              (this.$2 = 0),
              (this.$3 = o(
                "WAWebWamEnumEntryPointType",
              ).ENTRY_POINT_TYPE.MAIN_SCREEN),
              (this.$4 = o("WAWebWamEnumSurfaceCode").SURFACE_CODE.MEDIA),
              (this.$5 = !1),
              this.$1
            );
          }),
          (t.getSessionId = function () {
            return this.$1;
          }),
          (t.getFromSearchResults = function () {
            return this.$5;
          }),
          (t.setFromSearchResults = function (t) {
            this.$5 = t;
          }),
          (t.getSequence = function () {
            return ++this.$2;
          }),
          (t.setEntryPoint = function (t) {
            (t === void 0 &&
              (t = o("WAWebWamEnumEntryPointType").ENTRY_POINT_TYPE
                .MAIN_SCREEN),
              (this.$3 = t));
          }),
          (t.getEntryPoint = function () {
            return this.$3;
          }),
          (t.getSurface = function () {
            return this.$4;
          }),
          (t.setSurface = function (t) {
            this.$4 = t;
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
