__d(
  "WAWebNotificationIcon",
  [
    "Promise",
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
    "cr:16769",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = "v4";
    function p(e) {
      var t = [];
      e > 0 && t.push("(" + r("WAWebL10N").n(e) + ")");
      var a = n("cr:16769") == null ? void 0 : n("cr:16769").getTitle();
      a != null
        ? t.push(a.toString())
        : o("WAWebMobilePlatforms").isSMB()
          ? t.push(r("WAWebFbtCommon")("WhatsApp Business").toString())
          : t.push(r("WAWebFbtCommon")("WhatsApp").toString());
      var i = t.join(" ");
      (o("WAWebCometRouterMetaManager").updateUnreadTitle(i),
        o("WAWebPwaDocumentMetadataUtils").isCurrentWebSessionInsidePwa() &&
          o("WAWebPwaDocumentMetadataUtils").setAppBadge(e),
        g(e));
    }
    var _;
    function f() {
      var e;
      ((_ = null),
        (e = document.getElementById("favicon")) == null || e.remove());
    }
    function g(t) {
      var a;
      if (!o("WAWebUA").UA.isSafari) {
        var i;
        t === -1
          ? (i = "favicon-error2")
          : t === 0
            ? (i = "favicon")
            : t < 10
              ? (i = "f0" + t)
              : t < 100
                ? (i = "f" + t)
                : (i = "f00");
        var l =
            t === 0
              ? n("cr:16769") == null
                ? void 0
                : n("cr:16769").getFaviconUrl()
              : null,
          p = l != null ? "favicon-internal-product" : i;
        ((_ = p),
          (a = document.getElementById("favicon")) == null || a.remove());
        var f = {
            id: i + "-" + m,
            low: { default: "/favicon/1x/" + i + "/" + m + "/" },
            high: { default: "/favicon/2x/" + i + "/" + m + "/" },
          },
          g =
            l != null
              ? (d || (d = n("Promise"))).resolve(l)
              : o("WAWebAssetLoaderSingleton").AssetLoader.loadAsset(
                  f,
                  o("WAWebAssetLoader").LOAD_PRIORITY.NOTIFICATION_ICON,
                  !1,
                );
        g.then(function (t) {
          if (_ !== p) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[favicon] skipped: ",
                  " because of newer favicon: ",
                  "",
                ])),
              p,
              _,
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
              i,
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
                i,
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
                f.id,
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("favicon-fetch-error");
          });
      }
    }
    ((l.setTitleAndIcon = p), (l.clearIcon = f));
  },
  98,
);
