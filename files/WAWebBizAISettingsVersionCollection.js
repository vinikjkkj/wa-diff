__d(
  "WAWebBizAISettingsVersionCollection",
  [
    "WALogger",
    "WAWebBizAISettingsCategoryRegistry",
    "WAWebBizAISettingsVersionModel",
    "WAWebStaleBaseCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function (t) {
        function r() {
          for (var e, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
            a[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(a)) || this),
            (e.findImpl = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n,
                    r,
                    a = o(
                      "WAWebBizAISettingsCategoryRegistry",
                    ).getCategoryHandler(t);
                  if (a == null) return null;
                  yield a.fetch();
                  var i = e.get(t);
                  return {
                    id: t,
                    version:
                      (n = i == null ? void 0 : i.version) != null ? n : 0,
                    updatedAtMs:
                      (r = i == null ? void 0 : i.updatedAtMs) != null ? r : 0,
                  };
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.handleNudge = function (n, r, a) {
            var t,
              i = String(n),
              l = this.get(i);
            if (l != null && l.version >= r) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] settings nudge: category=",
                    " already up to date (local=",
                    " >= incoming=",
                    ")",
                  ])),
                i,
                l.version,
                r,
              );
              return;
            }
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] settings nudge: category=",
                  " stale (local=",
                  " < incoming=",
                  ")",
                ])),
              i,
              (t = l == null ? void 0 : l.version) != null ? t : 0,
              r,
            );
            var u = this.gadd({ id: i, version: r, updatedAtMs: a });
            u.markStale();
          }),
          (a.incrementVersion = function (t) {
            var e,
              n = String(t),
              r = this.get(n),
              o = ((e = r == null ? void 0 : r.version) != null ? e : 0) + 1;
            return (
              this.gadd({ id: n, version: o, updatedAtMs: Date.now() }),
              o
            );
          }),
          (a.getByCategory = function (t) {
            return this.get(String(t));
          }),
          r
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    u.model = o("WAWebBizAISettingsVersionModel").BizAISettingsVersionModel;
    var c = new u();
    l.BizAISettingsVersionCollection = c;
  },
  98,
);
