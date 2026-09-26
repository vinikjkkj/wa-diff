__d(
  "FriendingButtonUtil",
  [
    "fbt",
    "FBLogger",
    "FBNucleusFriendAddFilled16Icon.react",
    "FBNucleusFriendRemoveFilled16Icon.react",
    "FriendingButtonFbt",
    "FriendingButtonStyle",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      switch (e) {
        case "CAN_REQUEST":
          switch (t.addTextEnum) {
            case o("FriendingButtonStyle").AddTextEnum.ADD_FRIEND:
              return o("FriendingButtonFbt").AddFriendButtonLabelFbt;
            case o("FriendingButtonStyle").AddTextEnum.ADD:
              return o("FriendingButtonFbt").AddFriendButtonLabelShortFbt;
          }
          break;
        case "OUTGOING_REQUEST":
          switch (t.cancelTextEnum) {
            case o("FriendingButtonStyle").CancelTextEnum.CANCEL_REQUEST:
              return o("FriendingButtonFbt").CancelRequestButtonFbt;
            case o("FriendingButtonStyle").CancelTextEnum.CANCEL:
              return o("FriendingButtonFbt").CancelRequestButtonLabelShortFbt;
          }
          break;
        case "INCOMING_REQUEST":
          switch (t.confirmTextEnum) {
            case o("FriendingButtonStyle").ConfirmTextEnum
              .CONFIRM_FRIEND_REQUEST:
              return o("FriendingButtonFbt").ConfirmFriendRequestButtonLabelFbt;
            case o("FriendingButtonStyle").ConfirmTextEnum.CONFIRM_REQUEST:
              return o("FriendingButtonFbt").ConfirmButtonLabelFbt;
            case o("FriendingButtonStyle").ConfirmTextEnum.CONFIRM:
              return o("FriendingButtonFbt").ConfirmButtonLabelFbtShort;
          }
          break;
        default:
          return (
            r("FBLogger")("growth_friending").mustfix(
              "getPrimaryFriendingButtonLabel Invalid friendship status on primary button %s",
              e,
            ),
            null
          );
      }
    }
    function u(t, n, o) {
      if (n == null) return e(t, o);
      switch (t) {
        case "CAN_REQUEST":
          return s._(/*BTDS*/ "Add Friend {user_name}", [
            s._param("user_name", n),
          ]);
        case "OUTGOING_REQUEST":
          return s._(/*BTDS*/ "Cancel Request {user_name}", [
            s._param("user_name", n),
          ]);
        case "INCOMING_REQUEST":
          return s._(/*BTDS*/ "Confirm {user_name}", [
            s._param("user_name", n),
          ]);
        default:
          return (
            r("FBLogger")("growth_friending").mustfix(
              "getAriaLabelForPrimaryFriendingButton Invalid friendship status on primary button %s",
              t,
            ),
            null
          );
      }
    }
    function c(e) {
      switch (e) {
        case "CAN_REQUEST":
          return "MAKE";
        case "OUTGOING_REQUEST":
          return "CANCEL";
        case "INCOMING_REQUEST":
          return "CONFIRM";
        default:
          return (
            r("FBLogger")("growth_friending").mustfix(
              "getPrimaryActionForFriendshipStatus Invalid friendship status on primary button action %s",
              e,
            ),
            null
          );
      }
    }
    function d(e) {
      switch (e) {
        case "INCOMING_REQUEST":
          return "REJECT";
        default:
          return (
            r("FBLogger")("growth_friending").mustfix(
              "getSecondaryActionForFriendshipStatus Invalid friendship status on second button action %s",
              e,
            ),
            null
          );
      }
    }
    function m(e, t) {
      if (
        (t == null ? void 0 : t.renderStyle) ===
        o("FriendingButtonStyle").RenderStyle.SECONDARY
      )
        return "secondary";
      switch (e) {
        case "OUTGOING_REQUEST":
          return "secondary";
        default:
          return "primary";
      }
    }
    function p(e) {
      switch (e.rejectRequestTextEnum) {
        case o("FriendingButtonStyle").RejectTextEnum.REJECT:
          return o("FriendingButtonFbt").reject();
        case o("FriendingButtonStyle").RejectTextEnum.REJECT_REQUEST:
          return o("FriendingButtonFbt").rejectRequest();
      }
    }
    function _(e, t) {
      switch (e) {
        case "INCOMING_REQUEST":
        case "CAN_REQUEST":
          return (t == null ? void 0 : t.renderStyle) === "DEEMPHASIZED";
        default:
          return !1;
      }
    }
    function f(e, t) {
      if (e == null) return p(t);
      switch (t.rejectRequestTextEnum) {
        case o("FriendingButtonStyle").RejectTextEnum.REJECT:
          return o("FriendingButtonFbt").rejectAiraLabel(e);
        case o("FriendingButtonStyle").RejectTextEnum.REJECT_REQUEST:
          return o("FriendingButtonFbt").rejectRequestAiraLabel(e);
      }
    }
    function g(e, t) {
      if (e.showIcons === !1) return null;
      switch (t) {
        case "MAKE":
          return r("FBNucleusFriendAddFilled16Icon.react");
        case "CANCEL":
          return r("FBNucleusFriendRemoveFilled16Icon.react");
        case "CONFIRM":
          return (e == null ? void 0 : e.showIconsOnConfirm) === !0
            ? r("FBNucleusFriendAddFilled16Icon.react")
            : null;
        case "REJECT":
        default:
          return null;
      }
    }
    function h(e) {
      switch (e) {
        case "MAKE":
          return "add_button";
        case "CANCEL":
          return "cancel_request_button";
        case "CONFIRM":
          return "confirm_button";
        case "REJECT":
          return "ignore_button";
        default:
          return "";
      }
    }
    function y(e) {
      return e === "%future added value"
        ? null
        : e === "SHORTCUT"
          ? "shortcut"
          : e;
    }
    var C = { validated: !0 },
      b = function (t, n) {
        var e;
        return t == null
          ? null
          : {
              icon: (e = t.icon) != null ? e : n,
              label: t.label,
              onPress: t.onPress,
              testid: t.testid,
              type: "secondary-button",
            };
      };
    ((l.getPrimaryFriendingButtonLabel = e),
      (l.getAriaLabelForPrimaryFriendingButton = u),
      (l.getPrimaryActionForFriendshipStatus = c),
      (l.getSecondaryActionForFriendshipStatus = d),
      (l.getPrimaryFriendingButtonType = m),
      (l.getSecondaryFriendingButtonLabel = p),
      (l.getIsButtonReduceEmphasis = _),
      (l.getAriaLabelForSecondaryFriendingButton = f),
      (l.getIconForFriendingAction = g),
      (l.getTestIdFromFriendingAction = h),
      (l.convertFriendingChannelToType = y),
      (l.CLICK_PROOF_VALIDATION_RESULT = C),
      (l.getAddOnFromFDSButtonProps = b));
  },
  226,
);
