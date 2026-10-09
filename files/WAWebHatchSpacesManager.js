__d(
  "WAWebHatchSpacesManager",
  ["WAWebHatchSpacesCatalog", "WAWebHatchSpacesState"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.$1 = o("WAWebHatchSpacesState").EMPTY_HATCH_SPACES_STATE),
            (this.$2 = o("WAWebHatchSpacesCatalog").hatchSpacesCatalog(
              o("WAWebHatchSpacesState").EMPTY_HATCH_SPACES_STATE,
            )),
            (this.$3 = []));
        }
        var t = e.prototype;
        return (
          (t.getCatalog = function () {
            return this.$2;
          }),
          (t.hasAppliedSnapshot = function () {
            return this.$1.snapshotsApplied > 0;
          }),
          (t.applyEvent = function (t) {
            var e = o("WAWebHatchSpacesState").reduceHatchSpacesEvent(
              this.$1,
              t,
            );
            e !== this.$1 && this.$4(e);
          }),
          (t.reset = function () {
            this.$1 !== o("WAWebHatchSpacesState").EMPTY_HATCH_SPACES_STATE &&
              this.$4(o("WAWebHatchSpacesState").EMPTY_HATCH_SPACES_STATE);
          }),
          (t.subscribe = function (t) {
            var e = this;
            this.$3.push(t);
            var n = !1;
            return function () {
              if (!n) {
                n = !0;
                var r = e.$3.indexOf(t);
                r !== -1 && e.$3.splice(r, 1);
              }
            };
          }),
          (t.__resetForTesting = function () {
            ((this.$1 = o("WAWebHatchSpacesState").EMPTY_HATCH_SPACES_STATE),
              (this.$2 = o("WAWebHatchSpacesCatalog").hatchSpacesCatalog(
                o("WAWebHatchSpacesState").EMPTY_HATCH_SPACES_STATE,
              )),
              (this.$3 = []));
          }),
          (t.$4 = function (t) {
            ((this.$1 = t),
              (this.$2 = o("WAWebHatchSpacesCatalog").hatchSpacesCatalog(t)));
            for (var e of [].concat(this.$3)) e();
          }),
          e
        );
      })(),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
