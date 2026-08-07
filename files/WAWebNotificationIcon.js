__d(
  "WAWebNotificationIcon",
  [
    "WAAbortError",
    "WALogger",
    "WAWebAssetLoader",
    "WAWebAssetLoaderSingleton",
    "WAWebCometRouterMetaManager",
    "WAWebFbtCommon",
    "WAWebL10N",
    "WAWebMobilePlatforms",
    "WAWebPwaDocumentMetadataUtils",
    "WAWebUA",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "v4";
    function m(e) {
      var t = [];
      (e > 0 && t.push("(" + r("WAWebL10N").n(e) + ")"),
        o("WAWebMobilePlatforms").isSMB()
          ? t.push(r("WAWebFbtCommon")("WhatsApp Business").toString())
          : t.push(r("WAWebFbtCommon")("WhatsApp").toString()));
      var n = t.join(" ");
      (o("WAWebCometRouterMetaManager").updateUnreadTitle(n),
        o("WAWebPwaDocumentMetadataUtils").isCurrentWebSessionInsidePwa() &&
          o("WAWebPwaDocumentMetadataUtils").setAppBadge(e),
        _(e));
    }
    var p;
    function _(t) {
      var n;
      if (!o("WAWebUA").UA.isSafari) {
        var a;
        (t === -1
          ? (a = "favicon-error2")
          : t === 0
            ? (a = "favicon")
            : t < 10
              ? (a = "f0" + t)
              : t < 100
                ? (a = "f" + t)
                : (a = "f00"),
          (p = a),
          (n = document.getElementById("favicon")) == null || n.remove());
        var i = {
          id: a + "-" + d,
          low: { default: "/favicon/1x/" + a + "/" + d + "/" },
          high: { default: "/favicon/2x/" + a + "/" + d + "/" },
        };
        o("WAWebAssetLoaderSingleton")
          .AssetLoader.loadAsset(
            i,
            o("WAWebAssetLoader").LOAD_PRIORITY.NOTIFICATION_ICON,
            !1,
          )
          .then(function (t) {
            if (p !== a) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[favicon] skipped: ",
                    " because of newer favicon: ",
                    "",
                  ])),
                a,
                p,
              );
              return;
            }
            var n = document.createElement("link");
            (n.setAttribute("id", "favicon"),
              n.setAttribute("rel", "icon"),
              n.setAttribute("type", "image/png"),
              n.setAttribute("href", t));
            var r = document.getElementsByTagName("head");
            (r != null && r[0] && r[0].appendChild(n),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[favicon] updated: ",
                    "",
                  ])),
                a,
              ));
          })
          .catch(
            o("WAAbortError").catchAbort(function () {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[favicon] update aborted: ",
                    "",
                  ])),
                a,
              );
            }),
          )
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[favicon] update failed id=",
                    "",
                  ])),
                i.id,
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("favicon-fetch-error");
          });
      }
    }
    l.setTitleAndIcon = m;
  },
  98,
);
