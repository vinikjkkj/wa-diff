__d(
  "FriendingButton",
  [
    "FBLogger",
    "FDSButton.react",
    "FDSButtonGroup.react",
    "FriendButtonActionProvider",
    "FriendingButtonUtil",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.acknowledgeWarn,
        n = e.callbacks,
        a = e.environment,
        i = e.friendingChannel,
        l = e.friendshipStatus,
        u = e.makeMutationExtraAttributionData,
        c = e.navigationChain,
        d = e.pymkLocation,
        m = e.shouldDisableOptimisticMutation,
        p = e.styles,
        _ = e.targetID,
        f = e.userName,
        g = o("FriendingButtonUtil").getPrimaryFriendingButtonType(l, p),
        h = function () {
          var e = C(),
            t = L();
          return i === "GRIFFIN_TAB"
            ? e &&
                t &&
                s.jsx(r("FDSButtonGroup.react"), {
                  paddingTop: 12,
                  primary: e,
                  secondary: t,
                  size: "medium",
                })
            : e &&
                t &&
                s.jsx(r("FDSButtonGroup.react"), {
                  paddingTop: 0,
                  primary: e,
                  secondary: t,
                  wrap: p.buttonGroupWrap,
                });
        },
        y = function () {
          switch (l) {
            case "INCOMING_REQUEST":
              return k();
            default:
              return (
                r("FBLogger")("growth_friending").mustfix(
                  "getConfirmButton Invalid friendship status on confirm button: %s",
                  l,
                ),
                null
              );
          }
        },
        C = function () {
          switch (l) {
            case "INCOMING_REQUEST":
              return T();
            default:
              return (
                r("FBLogger")("growth_friending").mustfix(
                  "getConfirmButtonForFDSButtonGroup Invalid friendship status on confirm button: %s",
                  l,
                ),
                null
              );
          }
        },
        b = function () {
          switch (l) {
            case "CAN_REQUEST":
            case "OUTGOING_REQUEST":
              return k();
            default:
              return (
                r("FBLogger")("growth_friending").mustfix(
                  "getAddFriendButton Invalid friendship status on add friend button %s",
                  l,
                ),
                null
              );
          }
        },
        v = function () {
          switch (l) {
            case "CAN_REQUEST":
            case "OUTGOING_REQUEST":
              return I();
            default:
              r("FBLogger")("growth_friending").mustfix(
                "getAddFriendButtonProps Invalid friendship status on add friend button %s",
                l,
              );
              return;
          }
        },
        S = function () {
          switch (l) {
            case "INCOMING_REQUEST":
              return I();
            default:
              r("FBLogger")("growth_friending").mustfix(
                "getConfirmFriendButtonProps Invalid friendship status on confirm friend button %s",
                l,
              );
              return;
          }
        },
        R = function () {
          switch (l) {
            case "CAN_REQUEST":
            case "OUTGOING_REQUEST":
              return T();
            default:
              return (
                r("FBLogger")("growth_friending").mustfix(
                  "getAddFriendButtonForFDSButtonGroup Invalid friendship status on add friend button %s",
                  l,
                ),
                null
              );
          }
        },
        L = function () {
          var e,
            t = o("FriendingButtonUtil").getSecondaryActionForFriendshipStatus(
              l,
            ),
            s = o("FriendingButtonUtil").getSecondaryFriendingButtonLabel(p),
            u = o(
              "FriendingButtonUtil",
            ).getAriaLabelForSecondaryFriendingButton(f, p),
            c =
              (e = o("FriendingButtonUtil").getIconForFriendingAction(p, t)) !=
              null
                ? e
                : void 0;
          return s == null || t == null
            ? (r("FBLogger")("growth_friending").mustfix(
                "getDeleteButtonForFDSButtonGroup Invalid friendship action on delete button acitonlabel or action is null",
              ),
              null)
            : {
                "aria-label": u != null ? u : s,
                icon: c,
                label: s,
                onPress: function () {
                  o(
                    "FriendButtonActionProvider",
                  ).executeSecondaryFriendingAction({
                    action: t,
                    callbacks: n,
                    environment: a,
                    friendingChannel: i,
                    friendshipStatus: l,
                    targetID: _,
                  });
                },
                testid: o("FriendingButtonUtil").getTestIdFromFriendingAction(
                  t,
                ),
                type: "secondary",
              };
        },
        E = function () {
          var e,
            t = o("FriendingButtonUtil").getSecondaryActionForFriendshipStatus(
              l,
            ),
            u = o("FriendingButtonUtil").getSecondaryFriendingButtonLabel(p),
            c = o(
              "FriendingButtonUtil",
            ).getAriaLabelForSecondaryFriendingButton(f, p),
            d =
              (e = o("FriendingButtonUtil").getIconForFriendingAction(p, t)) !=
              null
                ? e
                : void 0;
          return u == null || t == null
            ? (r("FBLogger")("growth_friending").mustfix(
                "getDeleteButton Invalid friendship status on delete friend button secondaryButtonLabel or action is null",
              ),
              null)
            : s.jsx(r("FDSButton.react"), {
                "aria-label": c != null ? c : u,
                icon: d,
                label: u,
                pressAction: function () {
                  o(
                    "FriendButtonActionProvider",
                  ).executeSecondaryFriendingAction({
                    action: t,
                    callbacks: n,
                    environment: a,
                    friendingChannel: i,
                    friendshipStatus: l,
                    targetID: _,
                  });
                },
                testid: void 0,
                variant: "secondary",
              });
        },
        k = function () {
          var e,
            h = o("FriendingButtonUtil").getPrimaryFriendingButtonLabel(l, p),
            y = o("FriendingButtonUtil").getAriaLabelForPrimaryFriendingButton(
              l,
              f,
              p,
            ),
            C = o("FriendingButtonUtil").getPrimaryActionForFriendshipStatus(l),
            b =
              (e = o("FriendingButtonUtil").getIconForFriendingAction(p, C)) !=
              null
                ? e
                : void 0;
          return h == null || C == null
            ? (r("FBLogger")("growth_friending").mustfix(
                "getPrimaryButton Invalid friendship status on primary friend button primaryButtonLabel or action is null",
              ),
              null)
            : s.jsx(r("FDSButton.react"), {
                "aria-label": y != null ? y : h,
                icon: b,
                label: h,
                pressAction: function () {
                  o("FriendButtonActionProvider").executePrimaryFriendingAction(
                    {
                      acknowledgeWarn: t,
                      action: C,
                      callbacks: n,
                      environment: a,
                      friendingChannel: i,
                      friendshipStatus: l,
                      makeMutationExtraAttributionData: u,
                      navigationChain: c,
                      pymkLocation: d,
                      shouldDisableOptimisticMutation: m,
                      targetID: _,
                    },
                  );
                },
                reduceEmphasis: o(
                  "FriendingButtonUtil",
                ).getIsButtonReduceEmphasis(l, p),
                testid: void 0,
                variant: g,
              });
        },
        I = function () {
          var e,
            t = o("FriendingButtonUtil").getPrimaryFriendingButtonLabel(l, p),
            s = o("FriendingButtonUtil").getPrimaryActionForFriendshipStatus(l),
            u =
              (e = o("FriendingButtonUtil").getIconForFriendingAction(p, s)) !=
              null
                ? e
                : void 0,
            c = o("FriendingButtonUtil").getAriaLabelForPrimaryFriendingButton(
              l,
              f,
              p,
            );
          if (t == null || s == null) {
            r("FBLogger")("growth_friending").mustfix(
              "getPrimaryButtonProps Invalid friendship status on primary friend button props primaryButtonLabel or action is null",
            );
            return;
          }
          return {
            "aria-label": c != null ? c : t,
            icon: u,
            label: t,
            onPress: function () {
              o("FriendButtonActionProvider").executePrimaryFriendingAction({
                action: s,
                callbacks: n,
                environment: a,
                friendingChannel: i,
                friendshipStatus: l,
                shouldDisableOptimisticMutation: m,
                targetID: _,
              });
            },
            reduceEmphasis: o("FriendingButtonUtil").getIsButtonReduceEmphasis(
              l,
              p,
            ),
            testid: o("FriendingButtonUtil").getTestIdFromFriendingAction(s),
            type: g,
          };
        },
        T = function () {
          var e,
            t = o("FriendingButtonUtil").getPrimaryFriendingButtonLabel(l, p),
            s = o("FriendingButtonUtil").getPrimaryActionForFriendshipStatus(l),
            u =
              (e = o("FriendingButtonUtil").getIconForFriendingAction(p, s)) !=
              null
                ? e
                : void 0,
            c = o("FriendingButtonUtil").getAriaLabelForPrimaryFriendingButton(
              l,
              f,
              p,
            );
          return t == null || s == null
            ? (r("FBLogger")("growth_friending").mustfix(
                "getPrimaryButtonForFDSButtonGroup Invalid friendship status on primary friend button group primaryButtonLabel or action is null",
              ),
              null)
            : {
                "aria-label": c != null ? c : t,
                icon: u,
                label: t,
                onPress: function () {
                  o("FriendButtonActionProvider").executePrimaryFriendingAction(
                    {
                      action: s,
                      callbacks: n,
                      environment: a,
                      friendingChannel: i,
                      friendshipStatus: l,
                      shouldDisableOptimisticMutation: m,
                      targetID: _,
                    },
                  );
                },
                testid: o("FriendingButtonUtil").getTestIdFromFriendingAction(
                  s,
                ),
                type: g,
              };
        };
      return {
        getAddFriendButton: b,
        getAddFriendButtonForFDSButtonGroup: R,
        getAddFriendButtonProps: v,
        getConfirmButton: y,
        getConfirmButtonForFDSButtonGroup: C,
        getConfirmFriendButtonProps: S,
        getDeleteButton: E,
        getDeleteButtonForFDSButtonGroup: L,
        getIncomingRequestButtons: h,
      };
    }
    l.FriendingButton = u;
  },
  98,
);
