__d(
  "WAWebBizBroadcastsMessageDocumentSection.react",
  [
    "WAWebBBLoggerTypes",
    "WAWebBizBroadcastsDocumentPreviewMetadata.react",
    "WAWebBizBroadcastsMessageSectionDocumentPreview.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebDocumentFileIcon",
    "WAWebFlex.react",
    "WAWebL10N",
    "WAWebModalManager",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSIconIcVisibility.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useState,
      m = {
        actionButtons: {
          alignItems: "x6s0dn4",
          columnGap: "x1trrmfo",
          top: "x1ngp85i",
          insetInlineEnd: "xe9xzdg",
          left: null,
          right: null,
          position: "x10l6tqk",
          transition: "xzdg38j",
          $$css: !0,
        },
        row: { flexGrow: "x1iyjqo2", $$css: !0 },
        text: {
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        textRTL: { textAlign: "xp4054r", $$css: !0 },
      };
    function p(e) {
      var t = e.entryPoint,
        n = e.onRemoveMedia,
        a = e.selectedDocumentData,
        i = a.fileExt,
        l = a.fileName,
        u = a.mimetype,
        p = d(!1),
        _ = p[0],
        f = p[1],
        g = c(function () {
          f(!0);
        }, []),
        h = c(function () {
          f(!1);
        }, []),
        y = c(
          function () {
            if (a != null) {
              var e = function () {
                return o("WAWebModalManager").ModalManager.closeMedia();
              };
              o("WAWebModalManager").ModalManager.openMedia(
                s.jsxs(s.Fragment, {
                  children: [
                    s.jsx("div", {
                      className:
                        "x1honnu5 x5yr21d x1o0tod xixxii4 x13vifvy xh8yej3 xbpklzw",
                    }),
                    s.jsx(
                      r(
                        "WAWebBizBroadcastsMessageSectionDocumentPreview.react",
                      ),
                      { selectedDocumentData: a, onRemoveMedia: n, onClose: e },
                    ),
                  ],
                }),
              );
            }
          },
          [a, n],
        );
      return s.jsxs(
        "div",
        babelHelpers.extends(
          { role: "group" },
          {
            0: {
              className:
                "xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x1ncir08 x1n2onr6 x1bu39yj",
            },
            1: {
              className:
                "xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x1ncir08 x1n2onr6 x1cbl2y9",
            },
          }[!!_ << 0],
          {
            onMouseEnter: g,
            onMouseLeave: h,
            children: [
              s.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "stretch",
                xstyle: m.row,
                children: [
                  s.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      {
                        0: {
                          className:
                            "x1abdmlv xyi3aci xwf5gio x1p453bz x1suzm8a x1gnnpzl x1xrf6ya xde1mab xscbp6u x1iw51ew x23j0i4",
                        },
                        1: {
                          className:
                            "xyi3aci xwf5gio x1p453bz x1suzm8a x1gnnpzl x1xrf6ya xde1mab xscbp6u x1iw51ew x23j0i4 x1cbl2y9",
                        },
                      }[!!_ << 0],
                      {
                        children: s.jsx(r("WAWebDocumentFileIcon"), {
                          width: 24,
                          mimeType: u,
                          ext: i != null ? i : "",
                        }),
                      },
                    ),
                  ),
                  s.jsxs(o("WAWebFlex.react").FlexColumn, {
                    justify: "center",
                    xstyle: [m.text, r("WAWebL10N").isRTL() && m.textRTL],
                    children: [
                      s.jsx(r("WDSText.react"), {
                        maxLines: 1,
                        colorName: "contentDefault",
                        type: "Body2Emphasized",
                        testid: void 0,
                        children: l,
                      }),
                      s.jsx(
                        r("WAWebBizBroadcastsDocumentPreviewMetadata.react"),
                        { documentData: a },
                      ),
                    ],
                  }),
                ],
              }),
              _ &&
                s.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: m.actionButtons,
                  children: [
                    s.jsx(r("WDSButton.react"), {
                      size: "small",
                      variant: "filled",
                      Icon: r("WDSIconIcVisibility.react"),
                      onPress: function () {
                        (o(
                          "WAWebBusinessBroadcastUserJourneyLogger",
                        ).BusinessBroadcastUserJourneyLogger.attachmentPreviewButtonClicked(
                          t,
                          o("WAWebBBLoggerTypes").UserActionTarget
                            .ATTACHMENT_DOCUMENT_PREVIEW_BUTTON,
                          a.fileExt,
                          a.fileSize,
                        ),
                          y());
                      },
                      testid: void 0,
                    }),
                    s.jsx(r("WDSButton.react"), {
                      size: "small",
                      variant: "filled",
                      Icon: r("WDSIconIcClose.react"),
                      onPress: function () {
                        (o(
                          "WAWebBusinessBroadcastUserJourneyLogger",
                        ).BusinessBroadcastUserJourneyLogger.attachmentRemoveButtonClicked(
                          t,
                          o("WAWebBBLoggerTypes").UserActionTarget
                            .ATTACHMENT_DOCUMENT_REMOVE_BUTTON,
                          a.fileExt,
                          a.fileSize,
                        ),
                          n());
                      },
                      testid: void 0,
                    }),
                  ],
                }),
            ],
          },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
