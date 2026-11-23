__d(
  "WAWebSwCallPopoutHandler",
  ["WALogger", "WAWebEnvironment", "WAWebSwFeature"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "call/popout",
      d = (function (t) {
        function n() {
          for (var n, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return (
            (n = t.call.apply(t, [this].concat(i)) || this),
            (n.matchFetch = function (t) {
              var n = t.request;
              if (n.mode !== "navigate") return !1;
              var r = new URL(n.url).origin;
              if (r !== self.location.origin) return !1;
              var a = o("WAWebSwFeature").SWFeature.parseUrl(n.url),
                i = (a == null ? void 0 : a.relativePath) === c;
              return (
                i &&
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[sw] popout: matchFetch hit, mode=",
                        ", url=",
                        "",
                      ])),
                    n.mode,
                    n.url,
                  ),
                i
              );
            }),
            (n.onFetch = async function (e) {
              var t = new Headers({
                "Content-Type": "text/html; charset=utf-8",
              });
              try {
                var n = await self.fetch("/", {
                    method: "HEAD",
                    credentials: "same-origin",
                  }),
                  a = [
                    "cross-origin-embedder-policy",
                    "cross-origin-opener-policy",
                    "cross-origin-resource-policy",
                    "document-isolation-policy",
                  ];
                for (var i of a) {
                  var l = n.headers.get(i);
                  l != null &&
                    (i === "cross-origin-opener-policy" &&
                      (l = l.split(";")[0].trim()),
                    t.set(i, l));
                }
              } catch (e) {
                (o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[sw] popout: HEAD / failed, COOP/COEP fallback: ",
                      "",
                    ])),
                  String(e),
                ),
                  t.set("Cross-Origin-Embedder-Policy", "require-corp"),
                  t.set("Cross-Origin-Opener-Policy", "same-origin"),
                  t.set("Cross-Origin-Resource-Policy", "cross-origin"));
              }
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[sw] popout: serving synthetic HTML, headers=",
                    "",
                  ])),
                [].concat(Array.from(t.keys())).join(","),
              );
              var c =
                r("WAWebEnvironment").getEnvironment() !== "prod"
                  ? "console.log('[popout shell] script executing, opener=', !!window.opener);"
                  : "";
              return new Response(
                `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <script>
      ` +
                  c +
                  `
      if (window.opener) {
        window.opener.postMessage('voipPopoutReady', window.location.origin);
      }
    <\/script>
  </body>
</html>`,
                { status: 200, headers: t },
              );
            }),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        return (babelHelpers.inheritsLoose(n, t), n);
      })(o("WAWebSwFeature").SWFeature);
    l.default = d;
  },
  98,
);
