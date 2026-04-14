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
      var t,
        a = e.ref,
        i = e.msg,
        l = e.onCancel,
        c = e.onConfirm,
        f = p((t = o("WAWebFrontendMsgGetters").getText(i)) != null ? t : ""),
        y = f[0],
        C = f[1],
        b = d(
          function () {
            return h(i);
          },
          [i],
        ),
        v = p(b),
        S = v[0],
        R = v[1],
        L = m({}),
        E = g(y, b, S),
        k = p(!1),
        I = k[0],
        T = k[1],
        D = p(!1),
        x = D[0],
        $ = D[1];
      (o(
        "WAWebComposeBoxHasUnsavedChangesInEditModal",
      ).setHasUnsavedChangesInEditModal(E),
        o("useWAWebListener").useListener(
          o("WAWebModalManager").ModalManager,
          ["close_modal"],
          function () {
            o(
              "WAWebComposeBoxHasUnsavedChangesInEditModal",
            ).setHasUnsavedChangesInEditModal(!1);
          },
        ));
      var P = function (t) {
          var e, n;
          (C(t.text),
            $(t.text.trim().length === 0),
            (L.current.mentionedJidList =
              (e = t.data.mentionedJidList) != null ? e : []),
            (L.current.groupMentions =
              (n = t.data.groupMentions) != null ? n : []));
        },
        N = r("useWAWebStableCallback")(function (e) {
          ((L.current.linkPreview = e), R(e));
        }),
        M = function () {
          if (y.trim().length !== 0) {
            if (!E) {
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
              (T(!0), $(!0));
              return;
            }
            c(y, babelHelpers.extends({}, L.current));
          }
        },
        w = function () {
          E || o("WAWebModalManager").ModalManager.close();
        },
        A = I
          ? u.jsx(r("WAWebMessageEditActionsModal.react"), {
              type: o("WAWebModal.react").ModalTheme.MessageActionsModal,
              titleText: s._(/*BTDS*/ "Time limit has passed"),
              okText: s._(/*BTDS*/ "OK"),
              onOk: function () {
                T(!1);
              },
              modalText: s._(
                /*BTDS*/ "You have 15 minutes to start and then finish editing a message.",
              ),
            })
          : null;
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(o("WAWebModal.react").Modal, {
            type: o("WAWebModal.react").ModalTheme.MessageEdit,
            ref: a,
            tsNavigationData: {
              surface: "message-edit",
              viewName: "message-edit",
            },
            onOverlayClick: w,
            children: u.jsxs(
              r("WAWebDrawer.react"),
              {
                testid: void 0,
                xstyle: _.drawer,
                disableNavigationLogging: !0,
                children: [
                  u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                    title: o("WAWebMsgGetters").getIsNewsletterMsg(i)
                      ? s._(/*BTDS*/ "Edit update")
                      : s._(/*BTDS*/ "Edit message"),
                    type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                    onCancel: l,
                  }),
                  u.jsxs(r("WAWebDrawerBody.react"), {
                    className:
                      "x78zum5 xdt5ytf x1iyjqo2 xs83m0k x2lwn1j xeuugli",
                    children: [
                      u.jsx(r("WAWebFlexItem.react"), {
                        grow: 0,
                        shrink: 1,
                        basis: "content",
                        xstyle: _.previewContainer,
                        children: u.jsx(r("WAWebMessageEditMsgPreview.react"), {
                          msg: i,
                          linkPreviewVisible: !!S,
                        }),
                      }),
                      u.jsx(
                        o("WAWebMessageEditComposer.react").MessageEditComposer,
                        {
                          msg: i,
                          initialLinkPreview: b,
                          onInputChange: P,
                          onLinkPreviewChange: N,
                          onConfirm: M,
                          disableConfirmButton: x,
                        },
                      ),
                    ],
                  }),
                ],
              },
              "edit-message-modal",
            ),
          }),
          A,
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e, t, n) {
      var r = e.trim(),
        o = m(r),
        a =
          r.length > 0 &&
          (r !== o.current ||
            (n == null ? void 0 : n.matchedText) !==
              (t == null ? void 0 : t.matchedText));
      return a;
    }
    function h(e) {
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
