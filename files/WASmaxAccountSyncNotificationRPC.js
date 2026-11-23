__d(
  "WASmaxAccountSyncNotificationRPC",
  [
    "WAResultOrError",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Notification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeNotificationResponseAck: function () {
          return p(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrDeviceJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "account_sync",
      );
      if (!r.success) return r;
      var a = d(e);
      if (!a.success) return a;
      var i = u(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ from: n.value, type: r.value }, a.value, {
              notificationType: i.value,
            }),
          )
        : i;
    }
    function u(e) {
      var t = _(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationBlocklistNotification",
          value: t.value,
        });
      var n = h(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationDevicesNotification",
          value: n.value,
        });
      var r = b(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationPictureNotification",
          value: r.value,
        });
      var a = v(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationPrivacyNotification",
          value: a.value,
        });
      var i = S(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationStatusNotification",
          value: i.value,
        });
      var l = R(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationTextStatusNotification",
          value: l.value,
        });
      var s = c(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationUsernameNotification",
          value: s.value,
        });
      var u = y(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationDisappearingModeNotification",
          value: u.value,
        });
      var d = C(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationNoticeNotification",
          value: d.value,
        });
      var m = g(e);
      if (m.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationCoverPhotoNotification",
          value: m.value,
        });
      var p = f(e);
      return p.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationCallPermissionNotification",
            value: p.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "BlocklistNotification",
              "DevicesNotification",
              "PictureNotification",
              "PrivacyNotification",
              "StatusNotification",
              "TextStatusNotification",
              "UsernameNotification",
              "DisappearingModeNotification",
              "NoticeNotification",
              "CoverPhotoNotification",
              "CallPermissionNotification",
            ],
            [t, n, r, a, i, l, s, u, d, m, p],
          );
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "username");
      if (!n.success) return n;
      var r = m(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            usernameUsernameNotificationType: r.value,
          })
        : r;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "offline",
        0,
        1024,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            t: n.value,
            id: r.value,
            offline: a.value,
          })
        : a;
    }
    function m(e) {
      var t = k(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationUsernameNoPayload",
          value: t.value,
        });
      var n = L(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationUsernameChange",
          value: n.value,
        });
      var r = E(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationUsernameDeletion",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["UsernameNoPayload", "UsernameChange", "UsernameDeletion"],
            [t, n, r],
          );
    }
    function p(e) {
      var t = P(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "blocklist");
      if (!n.success) return n;
      var r = N(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            blocklistBlocklistNotificationWithoutOrNotificationWithPayloadMixinGroup:
              r.value,
          })
        : r;
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "call_permission");
      if (!n.success) return n;
      var r = M(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            callPermissionCallPermissionNotificationType: r.value,
          })
        : r;
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "cover_photo");
      if (!n.success) return n;
      var r = w(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            coverPhotoCoverPhotoNotificationType: r.value,
          })
        : r;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "devices");
      if (!n.success) return n;
      var r = A(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            devicesDevicesNotificationType: r.value,
          })
        : r;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "disappearing_mode",
      );
      if (!n.success) return n;
      var r = F(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            disappearingModeDisappearingModeNotificationType: r.value,
          })
        : r;
    }
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "notice");
      if (!n.success) return n;
      var r = O(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            noticeNoticeNotificationType: r.value,
          })
        : r;
    }
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "picture");
      if (!n.success) return n;
      var r = I(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            picturePictureNotificationType: r.value,
          })
        : r;
    }
    function v(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "privacy");
      if (!n.success) return n;
      var r = T(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            privacyPrivacyNotificationType: r.value,
          })
        : r;
    }
    function S(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "status");
      if (!n.success) return n;
      var r = D(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            statusStatusNotificationType: r.value,
          })
        : r;
    }
    function R(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "text_status");
      if (!n.success) return n;
      var r = x(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            textStatusTextStatusNotificationType: r.value,
          })
        : r;
    }
    function L(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "username");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "username");
      return n.success
        ? o("WAResultOrError").makeResult({ username: n.value })
        : n;
    }
    function E(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "username");
      return t.success ? o("WASmaxParseUtils").voidSuccess : t;
    }
    function k(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "username");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
        "modify",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ action: n.value })
        : n;
    }
    function I(e) {
      var t = te(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationPicture",
          value: t.value,
        });
      var n = ne(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationPictureNoPayload",
          value: n.value,
        });
      var r = ie(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationStagingPicture",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Picture", "PictureNoPayload", "StagingPicture"],
            [t, n, r],
          );
    }
    function T(e) {
      var t = ae(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationPrivacyNoPayload",
          value: t.value,
        });
      var n = oe(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationPrivacy",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["PrivacyNoPayload", "Privacy"],
            [t, n],
          );
    }
    function D(e) {
      var t = le(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationStatus",
          value: t.value,
        });
      var n = se(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationStatusNoPayload",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Status", "StatusNoPayload"],
            [t, n],
          );
    }
    function x(e) {
      var t = ce(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationTextStatus",
          value: t.value,
        });
      var n = de(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationTextStatusNoPayload",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["TextStatus", "TextStatusNoPayload"],
            [t, n],
          );
    }
    function $(e) {
      var t = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseJid").attrDeviceJid,
        e,
        ["from"],
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrString,
        e,
        ["type"],
      );
      if (!r.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(r.error);
      var a = o("WASmaxJsx").smax("ack", {
        id: o("WAWap").STANZA_ID(t.value),
        to: o("WAWap").DEVICE_JID(n.value),
        class: "notification",
        type: o("WAWap").CUSTOM_STRING(r.value),
      });
      return a;
    }
    function P(e, t) {
      var n = $(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function N(e) {
      var t = W(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationBlocklistWithoutPayload",
          value: t.value,
        });
      var n = B(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationBlocklistWithPayload",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["BlocklistWithoutPayload", "BlocklistWithPayload"],
            [t, n],
          );
    }
    function M(e) {
      var t = q(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationCallPermission",
          value: t.value,
        });
      var n = U(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationCallPermissionNoPayload",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["CallPermission", "CallPermissionNoPayload"],
            [t, n],
          );
    }
    function w(e) {
      var t = V(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationCoverPhoto",
          value: t.value,
        });
      var n = H(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationCoverPhotoNoPayload",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["CoverPhoto", "CoverPhotoNoPayload"],
            [t, n],
          );
    }
    function A(e) {
      var t = K(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationDevices",
          value: t.value,
        });
      var n = Q(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationDevicesNoPayload",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Devices", "DevicesNoPayload"],
            [t, n],
          );
    }
    function F(e) {
      var t = X(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationDisappearingMode",
          value: t.value,
        });
      var n = Y(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationDisappearingModeNoPayload",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["DisappearingMode", "DisappearingModeNoPayload"],
            [t, n],
          );
    }
    function O(e) {
      var t = Z(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationNotice",
          value: t.value,
        });
      var n = ee(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationNoticeNoPayload",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Notice", "NoticeNoPayload"],
            [t, n],
          );
    }
    function B(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "blocklist");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "dhash");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "prev_dhash",
      );
      if (!r.success) return r;
      var a = J(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            dhash: n.value,
            prevDhash: r.value,
            notificationNonOrNotificationMigratedBlocklistNotificationMixinGroup:
              a.value,
          })
        : a;
    }
    function W(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "blocklist");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
        "modify",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "addressing_mode",
        "lid",
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            action: n.value,
            addressingMode: r.value,
          })
        : r;
    }
    function q(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "call_permission");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "item");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "dhash");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "prev_dhash",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "permission_status",
        ve,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseJid").attrUserJid(n.value, "jid");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "timestamp",
        1577865600,
        4102473600,
      );
      return s.success
        ? o("WAResultOrError").makeResult({
            dhash: r.value,
            prevDhash: a.value,
            itemPermissionStatus: i.value,
            itemJid: l.value,
            itemTimestamp: s.value,
          })
        : s;
    }
    function U(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "call_permission");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
        "modify",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ action: n.value })
        : n;
    }
    function V(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "cover_photo");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "delete");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    function H(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "cover_photo");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
        "modify",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ action: n.value })
        : n;
    }
    function G(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "device");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrDeviceJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "key-index",
        0,
        void 0,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ jid: n.value, keyIndex: r.value })
        : r;
    }
    function z(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "key-index-list");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "ts", -1, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytesRange(e, 0, 500);
      return r.success
        ? o("WAResultOrError").makeResult({
            ts: n.value,
            elementValue: r.value,
          })
        : r;
    }
    function j(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "coex_token");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 0, 100);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function K(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "devices");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "key-index-list",
        z,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "coex_token", j);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "dhash");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(e, "device", 0, 1e3, G);
      return i.success
        ? o("WAResultOrError").makeResult({
            dhash: a.value,
            keyIndexList: n.value,
            coexToken: r.value,
            device: i.value,
          })
        : i;
    }
    function Q(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "devices");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
        "modify",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ action: n.value })
        : n;
    }
    function X(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "disappearing_mode");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "duration", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      return r.success
        ? o("WAResultOrError").makeResult({ duration: n.value, t: r.value })
        : r;
    }
    function Y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "disappearing_mode");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
        "modify",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ action: n.value })
        : n;
    }
    function J(e) {
      var t = ye(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationNonMigratedBlocklistNotification",
          value: t.value,
        });
      var n = he(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationMigratedBlocklistNotification",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "NonMigratedBlocklistNotification",
              "MigratedBlocklistNotification",
            ],
            [t, n],
          );
    }
    function Z(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notice");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "id", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "stage", 0, 1e3);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(e, "version", 1, void 0);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrIntRange(e, "type", 0, void 0);
      return l.success
        ? o("WAResultOrError").makeResult({
            id: n.value,
            stage: r.value,
            t: a.value,
            version: i.value,
            type: l.value,
          })
        : l;
    }
    function ee(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notice");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
        "modify",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ action: n.value })
        : n;
    }
    function te(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "delete");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    function ne(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
        "modify",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ action: n.value })
        : n;
    }
    function re(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "category");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "value");
      if (!r.success) return r;
      var a = me(e);
      return o("WAResultOrError").makeResult({
        name: n.value,
        value: r.value,
        contactBlacklistData: a.success ? a.value : null,
      });
    }
    function oe(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "privacy");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "category",
        0,
        1e3,
        re,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ category: n.value })
        : n;
    }
    function ae(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "privacy");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
        "modify",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ action: n.value })
        : n;
    }
    function ie(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "staging_delete");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    function le(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "dhash");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentString(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            dhash: n.value,
            elementValue: r.value,
          })
        : r;
    }
    function se(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
        "modify",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ action: n.value })
        : n;
    }
    function ue(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "emoji");
      if (!t.success) return t;
      var n = Ce(e);
      return (n.success, n);
    }
    function ce(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "text_status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "emoji", ue);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrInt(e, "ephemeral_duration_sec");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(e, "last_update_time");
      return i.success
        ? o("WAResultOrError").makeResult({
            text: r.value,
            ephemeralDurationSec: a.value,
            lastUpdateTime: i.value,
            emoji: n.value,
          })
        : i;
    }
    function de(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "text_status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
        "modify",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ action: n.value })
        : n;
    }
    function me(e) {
      var t = ge(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationContactBlacklistWithAdditionalDataV2",
          value: t.value,
        });
      var n = fe(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationContactBlacklistWithAdditionalData",
          value: n.value,
        });
      var r = pe(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationContactBlacklistNoAdditionalData",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ContactBlacklistWithAdditionalDataV2",
              "ContactBlacklistWithAdditionalData",
              "ContactBlacklistNoAdditionalData",
            ],
            [t, n, r],
          );
    }
    function pe(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "category");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
        "modify",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ action: n.value })
        : n;
    }
    function _e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "user");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "action");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "jid",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrLidUserJid,
        e,
        "lid",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            action: n.value,
            jid: r.value,
            lid: a.value,
          })
        : a;
    }
    function fe(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "category");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "dhash");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "prev_dhash");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(e, "user", 0, 1e3, _e);
      return a.success
        ? o("WAResultOrError").makeResult({
            dhash: n.value,
            prevDhash: r.value,
            user: a.value,
          })
        : a;
    }
    function ge(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "category");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "dhash");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "prev_dhash");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
        "modify",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            dhash: n.value,
            prevDhash: r.value,
            action: a.value,
          })
        : a;
    }
    function he(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "blocklist");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "item");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "addressing_mode",
        "lid",
      );
      if (!r.success) return r;
      var a = Se(n.value);
      return a.success
        ? o("WAResultOrError").makeResult({
            addressingMode: r.value,
            itemMigratedNotificationBlockOrNotificationUnblockNotificationMixinGroup:
              a.value,
          })
        : a;
    }
    function ye(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "blocklist");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "item");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "addressing_mode",
        "pn",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(n.value, "action", be);
      if (!a.success) return a;
      var i = o("WASmaxParseJid").attrUserJid(n.value, "jid");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrLidUserJid,
        n.value,
        "lid",
      );
      if (!l.success) return l;
      var s = Pe(n.value);
      return o("WAResultOrError").makeResult({
        addressingMode: r.value,
        itemAction: a.value,
        itemJid: i.value,
        itemLid: l.value,
        itemDisplayNameMixin: s.success ? s.value : null,
      });
    }
    function Ce(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "emoji");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "content");
      return n.success
        ? o("WAResultOrError").makeResult({ content: n.value })
        : n;
    }
    var be = { block: "block", unblock: "unblock" },
      ve = { DENIED: "DENIED", GRANTED: "GRANTED", PENDING: "PENDING" };
    function Se(e) {
      var t = Re(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationMigratedBlockNotification",
          value: t.value,
        });
      var n = Le(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationMigratedUnblockNotification",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["MigratedBlockNotification", "MigratedUnblockNotification"],
            [t, n],
          );
    }
    function Re(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
        "block",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrLidUserJid(e, "jid");
      if (!r.success) return r;
      var a = Ee(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ action: n.value, jid: r.value }, a.value),
          )
        : a;
    }
    function Le(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
        "unblock",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrLidUserJid(e, "jid");
      return r.success
        ? o("WAResultOrError").makeResult({ action: n.value, jid: r.value })
        : r;
    }
    function Ee(e) {
      var t = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "country_code",
      );
      if (!t.success) return t;
      var n = ke(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            countryCode: t.value,
            blocklistIds: n.value,
          })
        : n;
    }
    function ke(e) {
      var t = $e(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Username",
          value: t.value,
        });
      var n = De(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "PnJid",
          value: n.value,
        });
      var r = Ie(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "GuestNameAndDisplayName",
          value: r.value,
        });
      var a = Pe(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "DisplayName",
          value: a.value,
        });
      var i = Te(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "GuestName",
          value: i.value,
        });
      var l = xe(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            name: "UnknownIdentifier",
            value: l.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "Username",
              "PnJid",
              "GuestNameAndDisplayName",
              "DisplayName",
              "GuestName",
              "UnknownIdentifier",
            ],
            [t, n, r, a, i, l],
          );
    }
    function Ie(e) {
      var t = Pe(e);
      if (!t.success) return t;
      var n = Te(e);
      return n.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, t.value, n.value),
          )
        : n;
    }
    function Te(e) {
      var t = o("WASmaxParseUtils").attrString(e, "guest_name");
      return t.success
        ? o("WAResultOrError").makeResult({ guestName: t.value })
        : t;
    }
    function De(e) {
      var t = o("WASmaxParseJid").attrUserJid(e, "pn_jid");
      return t.success
        ? o("WAResultOrError").makeResult({ pnJid: t.value })
        : t;
    }
    function xe(e) {
      var t = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "unknown_identifier",
        "true",
      );
      return t.success
        ? o("WAResultOrError").makeResult({ unknownIdentifier: t.value })
        : t;
    }
    function $e(e) {
      var t = o("WASmaxParseUtils").attrString(e, "username");
      return t.success
        ? o("WAResultOrError").makeResult({ username: t.value })
        : t;
    }
    function Pe(e) {
      var t = o("WASmaxParseUtils").attrString(e, "display_name");
      return t.success
        ? o("WAResultOrError").makeResult({ displayName: t.value })
        : t;
    }
    ((l.receiveNotificationRPC = e),
      (l.parseNotificationRequest = s),
      (l.makeNotificationResponseAck = p),
      (l.ENUM_BLOCK_UNBLOCK = be),
      (l.ENUM_DENIED_GRANTED_PENDING = ve));
  },
  98,
);
