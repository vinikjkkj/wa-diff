__d(
  "WAWebBizBroadcastCreationAction",
  [
    "WAWebBizBroadcastCreationGate.react",
    "WAWebBizBroadcastCreationReadyAction.react",
    "WAWebBizBroadcastCreationState",
    "WAWebBizBroadcastsHomeStrings",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebUim",
    "WAWebUimUie.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t, n) {
      return function () {
        return c(e, t, n);
      };
    }
    function c(e, t, n, a) {
      a === void 0 && (a = !1);
      var i =
          a ||
          o("WAWebBizBroadcastCreationState").hasBizBroadcastProCreationContext(
            null,
          ),
        l = o("WAWebBizBroadcastCreationState").getBizBroadcastCreationState(i);
      if (
        l ===
        o("WAWebBizBroadcastCreationState").BizBroadcastCreationState.RECONNECT
      ) {
        t();
        return;
      }
      if (
        l ===
          o("WAWebBizBroadcastCreationState").BizBroadcastCreationState.CORE ||
        l === o("WAWebBizBroadcastCreationState").BizBroadcastCreationState.PRO
      ) {
        n(l);
        return;
      }
      o("WAWebModalManager").ModalManager.open(
        s.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "BizBroadcastCreationActionGate",
          escapable: !0,
          requestDismiss: function (t) {
            t !== o("WAWebUim").DismissReason.LIFECYCLE &&
              o("WAWebModalManager").closeModalManager();
          },
          children: s.jsx(o("WAWebModal.react").Modal, {
            ariaLabel: o(
              "WAWebBizBroadcastsHomeStrings",
            ).getBusinessBroadcastsTitle(),
            autoHeight: !0,
            fitToViewport: !0,
            onOverlayClick: o("WAWebModalManager").closeModalManager,
            testid: "biz-broadcast-creation-action-modal",
            children: s.jsx(r("WAWebBizBroadcastCreationGate.react"), {
              entryPoint: e,
              onBack: o("WAWebModalManager").closeModalManager,
              requiresProConnection: i,
              render: function (i, l) {
                return s.jsx(r("WAWebBizBroadcastCreationReadyAction.react"), {
                  onReady: function () {
                    var r = l.getSnapshot(),
                      a = r.state;
                    (a !==
                      o("WAWebBizBroadcastCreationState")
                        .BizBroadcastCreationState.CORE &&
                      a !==
                        o("WAWebBizBroadcastCreationState")
                          .BizBroadcastCreationState.PRO) ||
                      (o("WAWebModalManager").closeModalManager(),
                      c(e, t, n, l.hasProContext()));
                  },
                });
              },
            }),
          }),
        }),
      );
    }
    ((l.getBizBroadcastCreationAction = u),
      (l.runBizBroadcastCreationAction = c));
  },
  98,
);
