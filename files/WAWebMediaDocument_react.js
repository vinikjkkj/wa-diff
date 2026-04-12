__d(
  "WAWebMediaDocument.react",
  [
    "WAWebBizCtwaContext.react",
    "WAWebDisplayType",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMediaDocumentBubbleActions.react",
    "WAWebMediaDocumentPreview",
    "WAWebMessageCaption.react",
    "WAWebMessageContentBox.react",
    "WAWebMessageMeta.react",
    "WAWebMsgGetters",
    "react",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useImperativeHandle,
      p = d.useRef,
      _ = {
        bubble: {
          boxSizing: "x9f619",
          width: "x1o095ql",
          paddingTop: "x1u9i22x",
          paddingInlineEnd: "x1gn2fwh",
          paddingBottom: "x1gwem2t",
          paddingInlineStart: "x4c6wsc",
          $$css: !0,
        },
        isAnnouncement: { width: "x1yuel0x", $$css: !0 },
        bubbleExtraPadding: { paddingBottom: "x1yt8dio", $$css: !0 },
        isGallery: {
          width: "x14atkfc",
          "@media (max-width:880px)_insetInlineEnd": "xt1z7ec",
          "@media (max-width:880px)_left": null,
          "@media (max-width:880px)_right": null,
          "@media (max-width:880px)_overflowX": "x1yp9nv9",
          "@media (max-width:880px)_overflowY": "x186kree",
          "@media (max-width:880px)_textOverflow": "x1y04bub",
          "@media (max-width:880px)_whiteSpace": "x1duis28",
          $$css: !0,
        },
        isPreview: { maxWidth: "x193iq5w", $$css: !0 },
        templateBubble: { position: "x1n2onr6", $$css: !0 },
      },
      f = new Map([
        [o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO, _.isPreview],
        [o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS, _.isGallery],
        [o("WAWebDisplayType").DISPLAY_TYPE.GALLERY, _.isGallery],
        [o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT, _.isAnnouncement],
        [o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER, _.isAnnouncement],
      ]);
    function g(t) {
      var n,
        a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u = l.displayAuthor,
        d = l.displayType,
        g = l.msg,
        h = l.quotedMsg,
        y = l.trusted,
        C = p(null);
      m(i, function () {
        return {
          handleKeyActivation: function (t) {
            var e;
            (t.preventDefault(), (e = C.current) == null || e.click());
          },
        };
      });
      var b = o("useWAWebMsgValues").useMsgValues(l.msg.id, [
          (n = o("WAWebMsgGetters")).getAck,
          n.getCaption,
          (a = o("WAWebFrontendMsgGetters")).getDir,
          n.getId,
          n.getIsFromTemplate,
          n.getIsFailed,
          n.getIsSentByMe,
          a.getRtl,
          a.getSenderObj,
          n.getIsGroupMsg,
          n.getBody,
          n.getSupportsMessageFooter,
          n.getFooter,
          a.getText,
          n.getFilename,
          n.getIsCaptionByUser,
          n.getInitialPageSize,
        ]),
        v = b[0],
        S = b[1],
        R = b[2],
        L = b[3],
        E = b[4],
        k = b[5],
        I = b[6],
        T = b[7],
        D = b[8],
        x = b[9],
        $ = b[10],
        P = b[11],
        N = b[12],
        M = b[13],
        w = b[14],
        A = b[15],
        F = b[16],
        O = o("useWAWebMsgValues").useMsgValues(l.msg.id, [
          n.getSubtype,
          n.getType,
          n.getIsVcardOverMmsDocument,
          a.getMediaData,
          n.getIsDynamicReplyButtonsMsg,
        ]),
        B = O[0],
        W = O[1],
        q = O[2],
        U = O[3],
        V = O[4],
        H = r("WAWebL10N").isRTL(),
        G = r("WAWebEnvironment").isWindows
          ? c.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: {
                    className:
                      "x1n2onr6 x1n327nk x18mqm2i xhsvlbd x14z9mp xz62fqu x1wbi8v6",
                  },
                  1: {
                    className:
                      "x1n2onr6 x1n327nk xhsvlbd x14z9mp xz62fqu x1wbi8v6 xtrg13t",
                  },
                }[!!H << 0],
                {
                  children: c.jsx(o("WAWebMessageMeta.react").Meta, {
                    msg: g,
                    displayType: l.displayType,
                  }),
                },
              ),
            )
          : null,
        z = A
          ? c.jsxs(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: {
                    className:
                      "x9f619 x1d8l2j3 x1yrsyyn x11lfxj5 xs9asl8 x25sj25",
                  },
                  1: {
                    className:
                      "x9f619 x1yrsyyn x11lfxj5 xs9asl8 x25sj25 xno0opx",
                  },
                }[!!o("WAWebDisplayType").isWideDisplay(d) << 0],
                {
                  children: [
                    c.jsx(r("WAWebMessageCaption.react"), {
                      msg: g.unsafe(),
                      trusted: y,
                      spacer: !N,
                      testId: "document-caption",
                    }),
                    G,
                  ],
                },
              ),
            )
          : null,
        j = c.jsxs(r("WAWebMessageContentBox.react"), {
          displayType: d,
          msg: g,
          quotedMsg: h,
          showAuthor: u,
          hideCaption: z != null || !(E || V),
          hideMeta: r("WAWebEnvironment").isWindows,
          trusted: y,
          children: [
            c.jsx(r("WAWebBizCtwaContext.react"), {
              msg: g.unsafe(),
              wrapperClass: "xdj266r x14z9mp xahult9 x1lziwak",
            }),
            c.jsx(r("WAWebMediaDocumentPreview"), {
              ref: C,
              msg: g,
              displayType: d,
              showMessageMeta: r("WAWebEnvironment").isWindows && z == null,
            }),
            z,
            c.jsx(r("WAWebMediaDocumentBubbleActions.react"), { msg: g }),
          ],
        }),
        K = !!((E || V) && S);
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          (s || (s = r("stylex"))).props(
            _.bubble,
            !z && !r("WAWebEnvironment").isWindows && _.bubbleExtraPadding,
            K && _.templateBubble,
            f.get(d),
          ),
          { children: j },
        ),
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
