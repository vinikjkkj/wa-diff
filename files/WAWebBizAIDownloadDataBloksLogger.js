__d(
  "WAWebBizAIDownloadDataBloksLogger",
  ["WALogger", "WAWebODS"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function () {
        function t() {
          ((this.$1 = !1), (this.$2 = !1), (this.$3 = !1));
        }
        var n = t.prototype;
        return (
          (n.logModalOpened = function () {
            this.$1 ||
              ((this.$1 = !0),
              r("WAWebODS").incr("web.biz_ai.download_data.bloks.modal_opened"),
              r("WAWebODS").incr(
                "web.biz_ai.download_data.bloks.runtime_error",
                0,
              ),
              r("WAWebODS").incr(
                "web.biz_ai.download_data.bloks.script_error",
                0,
              ));
          }),
          (n.mustfix = function (n, a) {
            for (
              var t = arguments.length, i = new Array(t > 2 ? t - 2 : 0), l = 2;
              l < t;
              l++
            )
              i[l - 2] = arguments[l];
            var s = a instanceof Error ? i : [a].concat(i),
              u = 0,
              c = n.replace(/%s/g, function () {
                return String(s[u++]);
              }),
              d = o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "BizAI download data Bloks runtime failed: ",
                    "",
                  ])),
                c,
              );
            (this.$2 ||
              ((this.$2 = !0),
              r("WAWebODS").incr(
                "web.biz_ai.download_data.bloks.runtime_error",
              )),
              a instanceof Error && d.catching(a),
              d.sendLogs("biz-ai-download-data-bloks-runtime-failed"));
          }),
          (n.warn = function (t, n) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "BizAI download data Bloks warning: ",
                  "",
                ])),
              t,
            );
          }),
          (n.scriptError = function (t) {
            var e, n, a;
            this.$3 ||
              ((this.$3 = !0),
              r("WAWebODS").incr(
                "web.biz_ai.download_data.bloks.script_error",
              ));
            var i =
                (e =
                  (n = t.stackFrame) == null
                    ? void 0
                    : n.toArray().join(",")) != null
                  ? e
                  : "(unknown)",
              l = (a = t.asyncActionAppId) != null ? a : "(unknown)";
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "BizAI download data Bloks script failed: bloksStack=",
                    " asyncActionAppId=",
                    "",
                  ])),
                i,
                l,
              )
              .catching(t)
              .sendLogs("biz-ai-download-data-bloks-script-failed");
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
