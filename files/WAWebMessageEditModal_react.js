__d(
  "WAWebMessageEditModal.react",
  [
    "fbt",
    "PaymentLink",
    "WAWebComposeBoxHasUnsavedChangesInEditModal",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlexItem.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessageEditActionsModal.react",
    "WAWebMessageEditComposer.react",
    "WAWebMessageEditMsgPreview.react",
    "WAWebMessageEditUtils",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "cr:6009",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useMemo,
      m = c.useRef,
      p = c.useState,
      _ = {
        previewContainer: {
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          position: "x1n2onr6",
          zIndex: "x1ja2u2z",
          minHeight: "x2lwn1j",
          maxHeight: "xchkpuk",
          $$css: !0,
        },
        drawer: { position: "x1n2onr6", $$css: !0 },
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(46),
        a = e.ref,
        i = e.msg,
        l = e.onCancel,
        c = e.onConfirm,
        d;
      if (t[0] !== i) {
        var f;
        ((d = (f = o("WAWebFrontendMsgGetters").getText(i)) != null ? f : ""),
          (t[0] = i),
          (t[1] = d));
      } else d = t[1];
      var C = p(d),
        b = C[0],
        v = C[1],
        S;
      t[2] !== i ? ((S = y(i)), (t[2] = i), (t[3] = S)) : (S = t[3]);
      var R = S,
        L = p(R),
        E = L[0],
        k = L[1],
        I;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = {}), (t[4] = I))
        : (I = t[4]);
      var T = m(I),
        D = h(b, R, E),
        x = p(!1),
        $ = x[0],
        P = x[1],
        N = p(!1),
        M = N[0],
        w = N[1];
      o(
        "WAWebComposeBoxHasUnsavedChangesInEditModal",
      ).setHasUnsavedChangesInEditModal(D);
      var A;
      (t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = ["close_modal"]), (t[5] = A))
        : (A = t[5]),
        o("useWAWebListener").useListener(
          o("WAWebModalManager").ModalManager,
          A,
          g,
        ));
      var F;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = function (t) {
            var e, n;
            (v(t.text),
              w(t.text.trim().length === 0),
              (T.current.mentionedJidList =
                (e = t.data.mentionedJidList) != null ? e : []),
              (T.current.groupMentions =
                (n = t.data.groupMentions) != null ? n : []));
          }),
          (t[6] = F))
        : (F = t[6]);
      var O = F,
        B;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = function (t) {
            ((T.current.linkPreview = t), k(t));
          }),
          (t[7] = B))
        : (B = t[7]);
      var W = r("useWAWebStableCallback")(B),
        q;
      t[8] !== D || t[9] !== i || t[10] !== c || t[11] !== b
        ? ((q = function () {
            if (b.trim().length !== 0) {
              if (!D) {
                o("WAWebModalManager").ModalManager.close();
                return;
              }
              if (
                n("cr:6009") != null &&
                n("cr:6009").messageEditRestrictionEnabled() &&
                !o("WAWebMessageEditUtils").isParentWithinEditProcessingWindow({
                  parentTsInSeconds: i.t,
                  msgKey: i.id,
                })
              ) {
                (P(!0), w(!0));
                return;
              }
              c(b, babelHelpers.extends({}, T.current));
            }
          }),
          (t[8] = D),
          (t[9] = i),
          (t[10] = c),
          (t[11] = b),
          (t[12] = q))
        : (q = t[12]);
      var U = q,
        V;
      t[13] !== D
        ? ((V = function () {
            D || o("WAWebModalManager").ModalManager.close();
          }),
          (t[13] = D),
          (t[14] = V))
        : (V = t[14]);
      var H = V,
        G;
      t[15] !== $
        ? ((G = $
            ? u.jsx(r("WAWebMessageEditActionsModal.react"), {
                type: o("WAWebModal.react").ModalTheme.MessageActionsModal,
                titleText: s._(/*BTDS*/ "Time limit has passed"),
                okText: s._(/*BTDS*/ "OK"),
                onOk: function () {
                  P(!1);
                },
                modalText: s._(
                  /*BTDS*/ "You have 15 minutes to start and then finish editing a message.",
                ),
              })
            : null),
          (t[15] = $),
          (t[16] = G))
        : (G = t[16]);
      var z = G,
        j;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = { surface: "message-edit", viewName: "message-edit" }),
          (t[17] = j))
        : (j = t[17]);
      var K;
      t[18] !== i
        ? ((K = o("WAWebMsgGetters").getIsNewsletterMsg(i)
            ? s._(/*BTDS*/ "Edit update")
            : s._(/*BTDS*/ "Edit message")),
          (t[18] = i),
          (t[19] = K))
        : (K = t[19]);
      var Q;
      t[20] !== l || t[21] !== K
        ? ((Q = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: K,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
            onCancel: l,
          })),
          (t[20] = l),
          (t[21] = K),
          (t[22] = Q))
        : (Q = t[22]);
      var X;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = "x78zum5 xdt5ytf x1iyjqo2 xs83m0k x2lwn1j xeuugli"),
          (t[23] = X))
        : (X = t[23]);
      var Y = !!E,
        J;
      t[24] !== i || t[25] !== Y
        ? ((J = u.jsx(r("WAWebFlexItem.react"), {
            grow: 0,
            shrink: 1,
            basis: "content",
            xstyle: _.previewContainer,
            children: u.jsx(r("WAWebMessageEditMsgPreview.react"), {
              msg: i,
              linkPreviewVisible: Y,
            }),
          })),
          (t[24] = i),
          (t[25] = Y),
          (t[26] = J))
        : (J = t[26]);
      var Z;
      t[27] !== M || t[28] !== U || t[29] !== W || t[30] !== R || t[31] !== i
        ? ((Z = u.jsx(o("WAWebMessageEditComposer.react").MessageEditComposer, {
            msg: i,
            initialLinkPreview: R,
            onInputChange: O,
            onLinkPreviewChange: W,
            onConfirm: U,
            disableConfirmButton: M,
          })),
          (t[27] = M),
          (t[28] = U),
          (t[29] = W),
          (t[30] = R),
          (t[31] = i),
          (t[32] = Z))
        : (Z = t[32]);
      var ee;
      t[33] !== J || t[34] !== Z
        ? ((ee = u.jsxs(r("WAWebDrawerBody.react"), {
            className: X,
            children: [J, Z],
          })),
          (t[33] = J),
          (t[34] = Z),
          (t[35] = ee))
        : (ee = t[35]);
      var te;
      t[36] !== Q || t[37] !== ee
        ? ((te = u.jsxs(
            r("WAWebDrawer.react"),
            {
              testid: void 0,
              xstyle: _.drawer,
              disableNavigationLogging: !0,
              children: [Q, ee],
            },
            "edit-message-modal",
          )),
          (t[36] = Q),
          (t[37] = ee),
          (t[38] = te))
        : (te = t[38]);
      var ne;
      t[39] !== H || t[40] !== a || t[41] !== te
        ? ((ne = u.jsx(o("WAWebModal.react").Modal, {
            type: o("WAWebModal.react").ModalTheme.MessageEdit,
            ref: a,
            tsNavigationData: j,
            onOverlayClick: H,
            children: te,
          })),
          (t[39] = H),
          (t[40] = a),
          (t[41] = te),
          (t[42] = ne))
        : (ne = t[42]);
      var re;
      return (
        t[43] !== z || t[44] !== ne
          ? ((re = u.jsxs(u.Fragment, { children: [ne, z] })),
            (t[43] = z),
            (t[44] = ne),
            (t[45] = re))
          : (re = t[45]),
        re
      );
    }
    function g() {
      o(
        "WAWebComposeBoxHasUnsavedChangesInEditModal",
      ).setHasUnsavedChangesInEditModal(!1);
    }
    function h(e, t, n) {
      var r = e.trim(),
        o = m(r),
        a =
          r.length > 0 &&
          (r !== o.current ||
            (n == null ? void 0 : n.matchedText) !==
              (t == null ? void 0 : t.matchedText));
      return a;
    }
    function y(e) {
      var t = o("WAWebFrontendMsgGetters").getAsUrl(e.unsafe());
      if (!t) return null;
      var n = null;
      return (
        o("PaymentLink").shouldDetectInComposer() &&
          (n = o("PaymentLink").getPSP(t.matchedText)),
        {
          title: t.title,
          description: t.description,
          matchedText: t.matchedText,
          richPreviewType: t.richPreviewType,
          thumbnail: t.thumbnail,
          thumbnailHQ: t.thumbnailHQ,
          doNotPlayInline: !!t.doNotPlayInline,
          inviteGrpType: t.inviteGrpType,
          mediaKey: t.mediaKey,
          mediaKeyTimestamp: t.mediaKeyTimestamp,
          thumbnailDirectPath: t.thumbnailDirectPath,
          thumbnailSha256: t.thumbnailSha256,
          thumbnailEncSha256: t.thumbnailEncSha256,
          thumbnailHeight: t.thumbnailHeight,
          thumbnailWidth: t.thumbnailWidth,
          psp: n,
          isLoading: !1,
        }
      );
    }
    l.default = f;
  },
  226,
);
