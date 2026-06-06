__d(
  "WAWebAddonProcessMsgsUtils",
  [
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonGatingUtils",
    "WAWebAddonPerfUtils",
    "WAWebAddonPluginProcessor",
    "WAWebAddonQueryUtils",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebParentMsgKeyValidation",
    "WAWebWid",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      if (e.targetMessageKey != null) return "targetMessageKey";
      if (e.pinParentKey != null) return "pinParentKey";
      if (e.pollUpdateParentKey != null) return "pollUpdateParentKey";
      if (e.reactionParentKey != null) return "reactionParentKey";
      if (e.parentMsgKey != null) return "parentMsgKey";
      throw new (o("WAWebParentMsgKeyValidation").ParentMsgKeyValidationError)(
        o("WAWebParentMsgKeyValidation").ParentMsgKeyValidationErrorCode
          .MISSING_PARENT_MESSAGE_KEY,
      );
    }
    function u(e) {
      var t,
        n,
        a,
        i,
        l =
          (t =
            (n =
              (a = (i = e.targetMessageKey) != null ? i : e.parentMsgKey) !=
              null
                ? a
                : e.pinParentKey) != null
              ? n
              : e.pollUpdateParentKey) != null
            ? t
            : e.reactionParentKey;
      if (l instanceof r("WAWebMsgKey")) return l;
      throw new (o("WAWebParentMsgKeyValidation").ParentMsgKeyValidationError)(
        o("WAWebParentMsgKeyValidation").ParentMsgKeyValidationErrorCode
          .MISSING_PARENT_MESSAGE_KEY,
      );
    }
    function c(e) {
      var t = u(e);
      if (t.remote.isBroadcastList()) {
        var n = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
            t,
            o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
          ),
          a = t.fromMe ? n.to : n.from;
        return new (r("WAWebMsgKey"))({
          remote: a,
          fromMe: t.fromMe,
          id: t.id,
        });
      }
      return t;
    }
    function d(e) {
      var t = o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e);
      if (o("WAWebAddonPluginProcessor").getAddonProcessorsMap().has(t))
        return e;
    }
    function m(e, t) {
      var n = new Map(),
        a = e.map(function (e) {
          var a,
            i = c(e),
            l = o("WAWebLidMigrationUtils").getAlternateMsgKey(i),
            s = null;
          if (n.has(i.toString())) s = r("nullthrows")(n.get(i.toString()));
          else if (l != null && n.has(l.toString()))
            s = r("nullthrows")(n.get(l.toString()));
          else {
            var u = t.get(i.toString());
            (u == null && l && (u = t.get(l.toString())),
              u != null &&
                !i.equals(u.id) &&
                ((s = u.id), n.set(i.toString(), s)));
          }
          var d =
            (a = t.get(i.toString())) != null
              ? a
              : l != null
                ? t.get(l.toString())
                : void 0;
          if (d == null) return e;
          if (s == null) return p(e, d);
          var m = _(e, s);
          return p(m, d);
        });
      return (
        n.forEach(function (e, n) {
          var r = t.get(n);
          r != null && (t.set(e.toString(), r), t.delete(n));
        }),
        [t, a]
      );
    }
    function p(e, t) {
      var n,
        o =
          t.broadcastId != null &&
          r("WAWebWid").isWid(t.broadcastId) &&
          !!((n = t.broadcastId) != null && n.isBroadcastList());
      if (!o) return e;
      var a = c(e);
      return _(
        e,
        new (r("WAWebMsgKey"))({
          id: a.id,
          fromMe: a.fromMe,
          remote: a.remote,
        }),
      );
    }
    function _(e, t) {
      var n,
        o = s(e),
        a = e.id;
      return (
        e.id.remote.isUser() &&
          t.remote.isUser() &&
          (a = new (r("WAWebMsgKey"))({
            fromMe: e.id.fromMe,
            remote: t.remote,
            id: e.id.id,
          })),
        babelHelpers.extends({}, e, ((n = { id: a }), (n[o] = t), n))
      );
    }
    async function f(e, t) {
      var n = e.map(c),
        r;
      t === o("WAWebAddonConstants").AddonProcessMode.OnlineReceive &&
        (r = await o("WAWebAddonPerfUtils").createMessagesQplMarker(
          o("WAWebAddonPerfUtils").AddonQplMarkerType.Incoming,
          {
            type: o("WAWebAddonPerfUtils").AnnotationRequestType
              .BulkGetParentMsgs,
            size: n.length,
          },
        ));
      try {
        var a,
          i = await g(e);
        return ((a = r) == null || a.success(), i);
      } catch (e) {
        var l;
        throw ((l = r) == null || l.fail(), e);
      }
    }
    async function g(e) {
      var t = e.map(c),
        n = await o("WAWebAddonQueryUtils").getParentMsgsByMsgKey(t);
      return m(e, n);
    }
    async function h(t) {
      try {
        var n = [];
        for (var r of o("WAWebAddonPluginProcessor")
          .getAddonProcessorsMap()
          .entries()) {
          var a = r[0],
            i = r[1];
          o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(a) &&
            n.push(i.convert.fromHistorySyncMsg(t));
        }
        var l = await Promise.all(n).then(function (e) {
          var t;
          return (t = []).concat.apply(t, e);
        });
        return l;
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "parseHistorySyncMsg: error:",
                  "",
                ])),
              t,
            )
            .tags("addons", "messaging")
            .sendLogs("parseHistorySyncMsg"),
          []
        );
      }
    }
    function y(e) {
      var t = [],
        n = [],
        r = [];
      for (var a of e) {
        var i = a.parsedMsgPayload;
        if (o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(i.type)) {
          var l = d(i);
          l != null ? t.push(l) : n.push(a);
        } else
          i.kind === o("WAWebMsgType").MsgKind.ReactionDecrypted
            ? r.push(i)
            : n.push(a);
      }
      return { unifiedAddons: t, otherOrphans: n, legacyReactionAddons: r };
    }
    ((l.getParentMsgKey = c),
      (l.castToAddonMsgData = d),
      (l.updateMsgParentKeyValue = _),
      (l.queryAddonParentMsgs = f),
      (l.queryParentMsgs = g),
      (l.parseHistorySyncMsg = h),
      (l.sortAddonOrphans = y));
  },
  98,
);
