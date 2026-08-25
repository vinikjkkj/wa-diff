__d(
  "WAWebDBMessageUtils",
  [
    "$InternalEnum",
    "WAWebDBCAPIPermissions",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebOrderPreservingHex",
    "WAWebThreadId",
    "WAWebThreadUtils",
    "WAWebVcardParsingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      Default: "",
      GroupStatus: "gs",
      NewsletterStatus: "ns",
    });
    function s(e) {
      return e.toString() + "_/";
    }
    function u(e) {
      return e.toString() + "_g";
    }
    function c(t) {
      var n = t.chatId,
        r = t.inChatMsgId,
        a = t.internalIdPrefix,
        i = a === void 0 ? e.Default : a,
        l = o("WAWebOrderPreservingHex").orderPreservingHex(r);
      return "" + i + n + "_" + l + "_m";
    }
    function d(e) {
      var t = e.split("_")[1];
      return o("WAWebOrderPreservingHex").undoOrderPreservingHex(t);
    }
    function m(e) {
      var t = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(e.type);
      return String(t) + "_" + e.key.toString() + "_";
    }
    function p(e, t) {
      var n = o("WAWebOrderPreservingHex").orderPreservingHex(e),
        r = o("WAWebThreadUtils").getThreadsTypeAsE2EValue(t.type);
      return String(r) + "_" + t.key.toString() + "_" + n;
    }
    function _(e) {
      var t = e.split("_");
      return r("WAWebThreadId").from(t.slice(0, t.length - 1).join("_"));
    }
    function f(e, t) {
      var n = e.internalThreadIDs;
      if (n == null || n.length === 0) return !1;
      var r = m(t);
      return n.some(function (e) {
        return e.startsWith(r);
      });
    }
    function g(e) {
      var t = e.internalThreadIDs;
      return t == null || t.length === 0
        ? []
        : t.map(function (e) {
            return _(e);
          });
    }
    function h(e) {
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
    function y(t) {
      var n = t.isGroupStatus,
        r = t.isNewsletterStatus,
        o = e.Default;
      return (
        n === !0 ? (o = e.GroupStatus) : r === !0 && (o = e.NewsletterStatus),
        o
      );
    }
    function C(e) {
      return e.type !== "interactive" ||
        (e == null ? void 0 : e.interactivePayload) == null
        ? !1
        : e.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").CALL_PERMISSION_REQUEST;
    }
    function b(e) {
      var t = e.quotedMsg;
      return (t == null ? void 0 : t.type) !== "interactive" ||
        (t == null ? void 0 : t.interactivePayload) == null
        ? !1
        : t.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").CALL_PERMISSION_REQUEST;
    }
    function v(e) {
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
        if (s === "permanent_allow" || s === "temporary_allow" || s === "yes")
          return o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType
            .ALLOW;
        if (s === "disallow" || s === "no")
          return o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType
            .DENIED;
      } catch (e) {
        return o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType
          .PENDING;
      }
      return o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType.PENDING;
    }
    ((l.InternalIdPrefix = e),
      (l.beginningOfChat = s),
      (l.endOfChat = u),
      (l.craftInternalId = c),
      (l.getInChatMsgId = d),
      (l.craftInternalThreadIdPrefix = m),
      (l.craftInternalThreadId = p),
      (l.getThreadIdFromInternalThreadId = _),
      (l.messageHasThreadId = f),
      (l.getThreadIdsFromMessage = g),
      (l.getVcardWids = h),
      (l.getPrefixForInternalId = y),
      (l.isCoexCallingPermissionsRequestMessage = C),
      (l.isCoexCallingPermissionsResponseMessage = b),
      (l.getSelectedCallingPermissions = v));
  },
  98,
);
