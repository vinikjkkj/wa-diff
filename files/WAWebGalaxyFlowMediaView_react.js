__d(
  "WAWebGalaxyFlowMediaView.react",
  [
    "WALogger",
    "WAWebAttachMediaModel",
    "WAWebGalaxyFlowAttachMediaUtils",
    "WAWebMediaEditorEnumsThemes",
    "WAWebMediaEditorLoadable.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebUiIdleEventBus",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = c.useCallback,
      p = function () {
        o("WAWebModalManager").ModalManager.closeMedia();
      };
    function _(t) {
      var a = t.allowMultipleMedia,
        i = t.maxFileSizeBytes,
        l = t.maxItems,
        c = t.mediaCollection,
        _ = t.mediaMimeTypes,
        g = t.mediaPayload.collectionId,
        h = t.onRender,
        y = t.suportedMediaTypes,
        C = m(function (t) {
          return !t || t.length === 0
            ? (o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "GalaxyFlowMediaView: No media provided for sending",
                  ])),
              ),
              !1)
            : t.every(function (e, t) {
                return !e || !e.media
                  ? (o("WALogger").ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "GalaxyFlowMediaView: Invalid media item at index ",
                          "",
                        ])),
                      t,
                    ),
                    !1)
                  : !0;
              });
        }, []),
        b = m(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (C(e))
                  return n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      (g != null &&
                        o("WAWebUiIdleEventBus").UiIdleEventBus.once(
                          "ui_idle",
                          function () {
                            var t = [];
                            (e.forEach(function (e) {
                              var n = e.media,
                                r = {};
                              ((r.type = n.type),
                                (r.caption = n.caption),
                                (r.isMediaCryptoExpectedForChat = !0),
                                (r.addEvenWhilePreparing =
                                  n.previewable &&
                                  n.state ===
                                    o("WAWebAttachMediaModel")
                                      .ATTACH_MEDIA_STATE.PROCESSING),
                                t.length < 3 && t.push(n.type),
                                o(
                                  "WAWebGalaxyFlowAttachMediaUtils",
                                ).sendGalaxyMediaMsg(g, n, r, i));
                            }),
                              e.length > 0 &&
                                o("WALogger").LOG(
                                  u ||
                                    (u =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "GalaxyFlowMediaView: sent ",
                                        " items, types: ",
                                        "",
                                      ])),
                                  e.length,
                                  t,
                                ));
                          },
                        ),
                        o("WAWebModalManager").ModalManager.closeMedia());
                    },
                  )();
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [C, g, i],
        ),
        v = function (t) {
          return c.processAttachments(t, void 0, y, l);
        };
      return d.jsx("div", {
        className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 x1y61xfy",
        children: d.jsx(
          o("WAWebMediaEditorLoadable.react").MediaEditorLoadable,
          {
            theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.GALAXY_FLOW,
            onClose: p,
            onRender: h,
            initCaption: null,
            mimes: _,
            onSendMedia: b,
            mediaCollection: c,
            sendAsSticker: !1,
            onDropText: r("WAWebNoop"),
            canViewOnce: !1,
            hdEligible: !0,
            maxNumberOfMedia: l,
            renderCaptionInput: f,
            allowMultipleMedia: a,
            onProcessAttachments: v,
            tsNavigationData: { surface: "status-composer-media" },
          },
        ),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return d.jsx(d.Fragment, {});
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
