__d(
  "WAWebDBMessageUtils",
  [
    "$InternalEnum",
    "WAWebDBCAPIPermissions",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebThreadId",
    "WAWebThreadUtils",
    "WAWebVcardParsingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        IncomingChatMessage: "1",
        Outgoing: "2",
        SystemMessage: "3",
      }),
      s = n("$InternalEnum")({
        Default: "",
        GroupStatus: "gs",
        NewsletterStatus: "ns",
      });
    function u(e) {
      var t = e.toString(16);
      return (t.length - 1).toString(16) + t;
    }
    function c(e) {
      return parseInt(e.substring(1), 16);
    }
    function d(e) {
      return e.toString() + "_/";
    }
    function m(e) {
      return e.toString() + "_g";
    }
    function p(e, t, n) {
      n === void 0 && (n = s.Default);
      var r = u(t);
      return "" + n + e + "_" + r + "_m";
    }
    function _(e) {
      var t = e.split("_")[1];
      return c(t);
    }
    function f(e) {
      var t = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(e.type);
      return String(t) + "_" + e.key.toString() + "_";
    }
    function g(e, t) {
      var n = u(e),
        r = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(t.type);
      return String(r) + "_" + t.key.toString() + "_" + n;
    }
    function h(e) {
      var t = e.split("_");
      return r("WAWebThreadId").from(t.slice(0, t.length - 1).join("_"));
    }
    function y(e, t) {
      var n = e.internalThreadIDs;
      if (n == null || n.length === 0) return !1;
      var r = f(t);
      return n.some(function (e) {
        return e.startsWith(r);
      });
    }
    function C(e) {
      var t = e.internalThreadIDs;
      return t == null || t.length === 0
        ? []
        : t.map(function (e) {
            return h(e);
          });
    }
    function b(t, n, r, o) {
      var a;
      return (
        r
          ? (a = e.SystemMessage)
          : n
            ? (a = e.IncomingChatMessage)
            : (a = e.Outgoing),
        t + "_" + a + "_" + (o != null ? u(o) : "")
      );
    }
    function v(e) {
      var t = [];
      if (e.type === "vcard") t = [e.body];
      else if (e.kind === "multiVcard")
        t = e.vcardList.map(function (e) {
          return e.vcard;
        });
      else return;
      return t.filter(Boolean).reduce(function (e, t) {
        var n = o("WAWebVcardParsingUtils").vcardAllWids(
          o("WAWebVcardParsingUtils").parseVcard(t),
        );
        return e.concat(
          n.map(function (e) {
            return e.toString();
          }),
        );
      }, []);
    }
    function S(e) {
      var t = e.isGroupStatus,
        n = e.isNewsletterStatus,
        r = s.Default;
      return (
        t === !0 ? (r = s.GroupStatus) : n === !0 && (r = s.NewsletterStatus),
        r
      );
    }
    function R(e) {
      return e.type !== "interactive" ||
        (e == null ? void 0 : e.interactivePayload) == null
        ? !1
        : e.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").CALL_PERMISSION_REQUEST;
    }
    function L(e) {
      var t = e.quotedMsg;
      return (t == null ? void 0 : t.type) !== "interactive" ||
        (t == null ? void 0 : t.interactivePayload) == null
        ? !1
        : t.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").CALL_PERMISSION_REQUEST;
    }
    function E(e) {
      var t,
        n = e.quotedMsg;
      if ((n == null ? void 0 : n.type) !== "interactive")
        return o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType
          .PENDING;
      var r = (t = n.interactivePayload) == null ? void 0 : t.buttons;
      if (r == null || r.length === 0)
        return o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType
          .PENDING;
      var a = r[0].buttonParamsJson;
      if (a == null)
        return o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType
          .PENDING;
      try {
        var i,
          l = JSON.parse(a),
          s = l == null || (i = l.action_selected) == null ? void 0 : i.type;
        if (s === "permanent_allow")
          return o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType
            .ALLOW;
        if (s === "disallow")
          return o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType
            .DENIED;
      } catch (e) {
        return o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType
          .PENDING;
      }
      return o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType.PENDING;
    }
    ((l.MessagePropertyType = e),
      (l.InternalIdPrefix = s),
      (l.orderPreservingHex = u),
      (l.undoOrderPreservingHex = c),
      (l.beginningOfChat = d),
      (l.endOfChat = m),
      (l.craftInternalId = p),
      (l.getInChatMsgId = _),
      (l.craftInternalThreadIdPrefix = f),
      (l.craftInternalThreadId = g),
      (l.getThreadIdFromInternalThreadId = h),
      (l.messageHasThreadId = y),
      (l.getThreadIdsFromMessage = C),
      (l.craftMessageRangeIndex = b),
      (l.getVcardWids = v),
      (l.getPrefixForInternalId = S),
      (l.isCoexCallingPermissionsRequestMessage = R),
      (l.isCoexCallingPermissionsResponseMessage = L),
      (l.getSelectedCallingPermissions = E));
  },
  98,
);
