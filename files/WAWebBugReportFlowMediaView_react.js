__d(
  "WAWebBugReportFlowMediaView.react",
  [
    "WALogger",
    "WAWebMediaEditorEnumsThemes",
    "WAWebMediaEditorLoadable.react",
    "WAWebModalManager",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u.useCallback;
    function m(t) {
      var a = t.customCloseMediaModal,
        i = t.maxItems,
        l = t.mediaCollection,
        u = t.mediaMimeTypes,
        m = t.onRender,
        _ = t.onSend,
        f = t.suportedMediaTypes,
        g = d(
          function () {
            a != null ? a() : o("WAWebModalManager").ModalManager.closeMedia();
          },
          [a],
        ),
        h = d(function (t) {
          if (!t || t.length === 0)
            return (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "GalaxyFlowMediaView: No media provided for sending",
                  ])),
              ),
              !1
            );
          var n = null,
            r = t.every(function (e, t) {
              return !e || !e.media ? ((n = t), !1) : !0;
            });
          return (
            n != null &&
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "GalaxyFlowMediaView: Invalid media item at index ",
                    "",
                  ])),
                n,
              ),
            r
          );
        }, []),
        y = d(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (h(e))
                  return n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      (_(
                        e.map(function (e) {
                          return e.media;
                        }),
                      ).finally(r("WAWebNoop")),
                        a != null
                          ? a()
                          : o("WAWebModalManager").ModalManager.closeMedia());
                    },
                  )();
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [h, _, a],
        ),
        C = function (t) {
          return l.processAttachments(t, void 0, f, i);
        };
      return c.jsx("div", {
        className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 xoz0ns6",
        children: c.jsx(
          o("WAWebMediaEditorLoadable.react").MediaEditorLoadable,
          {
            theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.GALAXY_FLOW,
            onClose: g,
            onRender: m,
            initCaption: null,
            mimes: u,
            onSendMedia: y,
            mediaCollection: l,
            sendAsSticker: !1,
            onDropText: r("WAWebNoop"),
            canViewOnce: !1,
            hdEligible: !1,
            isSendHQPhotoEnabled: !1,
            maxNumberOfMedia: i,
            renderCaptionInput: p,
            onProcessAttachments: C,
            tsNavigationData: { surface: "bug-reporting-composer-media" },
          },
        ),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return c.jsx(c.Fragment, {});
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
