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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(37),
        n = e.entryPoint,
        a = e.onRemoveMedia,
        i = e.selectedDocumentData,
        l = i.fileExt,
        u = i.fileName,
        c = i.mimetype,
        p = d(!1),
        f = p[0],
        g = p[1],
        h;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function () {
            g(!0);
          }),
          (t[0] = h))
        : (h = t[0]);
      var y = h,
        C;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function () {
            g(!1);
          }),
          (t[1] = C))
        : (C = t[1]);
      var b = C,
        v;
      t[2] !== a || t[3] !== i
        ? ((v = function () {
            if (i != null) {
              var e = _;
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
                      { selectedDocumentData: i, onRemoveMedia: a, onClose: e },
                    ),
                  ],
                }),
              );
            }
          }),
          (t[2] = a),
          (t[3] = i),
          (t[4] = v))
        : (v = t[4]);
      var S = v,
        R;
      t[5] !== f
        ? ((R = {
            0: {
              className:
                "xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x1ncir08 x1n2onr6 x1bu39yj",
            },
            1: {
              className:
                "xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x1ncir08 x1n2onr6 x1cbl2y9",
            },
          }[!!f << 0]),
          (t[5] = f),
          (t[6] = R))
        : (R = t[6]);
      var L;
      t[7] !== f
        ? ((L = {
            0: {
              className:
                "x1abdmlv xyi3aci xwf5gio x1p453bz x1suzm8a x1gnnpzl x1xrf6ya xde1mab xscbp6u x1iw51ew x23j0i4",
            },
            1: {
              className:
                "xyi3aci xwf5gio x1p453bz x1suzm8a x1gnnpzl x1xrf6ya xde1mab xscbp6u x1iw51ew x23j0i4 x1cbl2y9",
            },
          }[!!f << 0]),
          (t[7] = f),
          (t[8] = L))
        : (L = t[8]);
      var E = l != null ? l : "",
        k;
      t[9] !== c || t[10] !== E
        ? ((k = s.jsx(r("WAWebDocumentFileIcon"), {
            width: 24,
            mimeType: c,
            ext: E,
          })),
          (t[9] = c),
          (t[10] = E),
          (t[11] = k))
        : (k = t[11]);
      var I;
      t[12] !== L || t[13] !== k
        ? ((I = s.jsx("div", babelHelpers.extends({}, L, { children: k }))),
          (t[12] = L),
          (t[13] = k),
          (t[14] = I))
        : (I = t[14]);
      var T;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = [m.text, r("WAWebL10N").isRTL() && m.textRTL]), (t[15] = T))
        : (T = t[15]);
      var D;
      t[16] !== u
        ? ((D = s.jsx(r("WDSText.react"), {
            maxLines: 1,
            colorName: "contentDefault",
            type: "Body2Emphasized",
            testid: void 0,
            children: u,
          })),
          (t[16] = u),
          (t[17] = D))
        : (D = t[17]);
      var x;
      t[18] !== i
        ? ((x = s.jsx(r("WAWebBizBroadcastsDocumentPreviewMetadata.react"), {
            documentData: i,
          })),
          (t[18] = i),
          (t[19] = x))
        : (x = t[19]);
      var $;
      t[20] !== D || t[21] !== x
        ? (($ = s.jsxs(o("WAWebFlex.react").FlexColumn, {
            justify: "center",
            xstyle: T,
            children: [D, x],
          })),
          (t[20] = D),
          (t[21] = x),
          (t[22] = $))
        : ($ = t[22]);
      var P;
      t[23] !== $ || t[24] !== I
        ? ((P = s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "stretch",
            xstyle: m.row,
            children: [I, $],
          })),
          (t[23] = $),
          (t[24] = I),
          (t[25] = P))
        : (P = t[25]);
      var N;
      t[26] !== n ||
      t[27] !== f ||
      t[28] !== a ||
      t[29] !== S ||
      t[30] !== i.fileExt ||
      t[31] !== i.fileSize
        ? ((N =
            f &&
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
                      n,
                      o("WAWebBBLoggerTypes").UserActionTarget
                        .ATTACHMENT_DOCUMENT_PREVIEW_BUTTON,
                      i.fileExt,
                      i.fileSize,
                    ),
                      S());
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
                      n,
                      o("WAWebBBLoggerTypes").UserActionTarget
                        .ATTACHMENT_DOCUMENT_REMOVE_BUTTON,
                      i.fileExt,
                      i.fileSize,
                    ),
                      a());
                  },
                  testid: void 0,
                }),
              ],
            })),
          (t[26] = n),
          (t[27] = f),
          (t[28] = a),
          (t[29] = S),
          (t[30] = i.fileExt),
          (t[31] = i.fileSize),
          (t[32] = N))
        : (N = t[32]);
      var M;
      return (
        t[33] !== P || t[34] !== N || t[35] !== R
          ? ((M = s.jsxs(
              "div",
              babelHelpers.extends({ role: "group" }, R, {
                onMouseEnter: y,
                onMouseLeave: b,
                children: [P, N],
              }),
            )),
            (t[33] = P),
            (t[34] = N),
            (t[35] = R),
            (t[36] = M))
          : (M = t[36]),
        M
      );
    }
    function _() {
      return o("WAWebModalManager").ModalManager.closeMedia();
    }
    l.default = p;
  },
  98,
);
