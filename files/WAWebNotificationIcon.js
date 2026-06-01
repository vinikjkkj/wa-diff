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
        var r;
        (t === -1
          ? (r = "favicon-error2")
          : t === 0
            ? (r = "favicon")
            : t < 10
              ? (r = "f0" + t)
              : t < 100
                ? (r = "f" + t)
                : (r = "f00"),
          (p = r),
          (n = document.getElementById("favicon")) == null || n.remove());
        var a = {
          id: r + "-" + d,
          low: { default: "/favicon/1x/" + r + "/" + d + "/" },
          high: { default: "/favicon/2x/" + r + "/" + d + "/" },
        };
        o("WAWebAssetLoaderSingleton")
          .AssetLoader.loadAsset(
            a,
            o("WAWebAssetLoader").LOAD_PRIORITY.NOTIFICATION_ICON,
            !1,
          )
          .then(function (t) {
            if (p !== r) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[favicon] skipped: ",
                    " because of newer favicon: ",
                    "",
                  ])),
                r,
                p,
              );
              return;
            }
            var n = document.createElement("link");
            (n.setAttribute("id", "favicon"),
              n.setAttribute("rel", "icon"),
              n.setAttribute("type", "image/png"),
              n.setAttribute("href", t));
            var a = document.getElementsByTagName("head");
            (a != null && a[0] && a[0].appendChild(n),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[favicon] updated: ",
                    "",
                  ])),
                r,
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
                r,
              );
            }),
          )
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Error updating favicon: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("favicon-fetch-error");
          });
      }
    }
    l.setTitleAndIcon = m;
  },
  98,
);
