__d(
  "WAWebNotificationIcon",
  [
    "WAAbortError",
    "WALogger",
    "WAWebABProps",
    "WAWebAssetLoader",
    "WAWebAssetLoaderSingleton",
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
      d = "v4",
      m = !1,
      p = !1,
      _ = 0,
      f = !1;
    function g() {
      f ||
        ((f = !0),
        (m = document.hidden),
        document.addEventListener("visibilitychange", function () {
          var e = m;
          ((m = document.hidden), e === !0 && m === !1 && ((p = !1), b(_)));
        }));
    }
    function h() {
      m === !0 && ((p = !0), b(_));
    }
    function y(e) {
      ((_ = e), g());
      var t = [];
      (e > 0 && t.push("(" + r("WAWebL10N").n(e) + ")"),
        o("WAWebMobilePlatforms").isSMB()
          ? t.push(r("WAWebFbtCommon")("WhatsApp Business").toString())
          : t.push(r("WAWebFbtCommon")("WhatsApp").toString()));
      var n = t.join(" ");
      (o("WAWebPwaDocumentMetadataUtils").setDocumentTitle(n),
        o("WAWebPwaDocumentMetadataUtils").isCurrentWebSessionInsidePwa() &&
          o("WAWebPwaDocumentMetadataUtils").setAppBadge(e),
        b(e));
    }
    var C;
    function b(t) {
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
          m === !0 &&
            p &&
            t >= 0 &&
            t <= 99 &&
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_favicon_badging_enabled",
            ) &&
            (r += "-badged"),
          (C = r),
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
            if (C !== r) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[favicon] skipped: ",
                    " because of newer favicon: ",
                    "",
                  ])),
                r,
                C,
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
    ((l.notifyBackgroundActivity = h), (l.setTitleAndIcon = y));
  },
  98,
);
