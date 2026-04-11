__d(
  "WAWebAddonProcessMsgsUtils",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
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
    function c(e) {
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
    function d(e) {
      var t = c(e);
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
    function m(e) {
      var t = o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e);
      if (o("WAWebAddonPluginProcessor").getAddonProcessorsMap().has(t))
        return e;
    }
    function p(e, t) {
      var n = new Map(),
        a = e.map(function (e) {
          var a,
            i = d(e),
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
          var c =
            (a = t.get(i.toString())) != null
              ? a
              : l != null
                ? t.get(l.toString())
                : void 0;
          if (c == null) return e;
          if (s == null) return _(e, c);
          var m = f(e, s);
          return _(m, c);
        });
      return (
        n.forEach(function (e, n) {
          var r = t.get(n);
          r != null && (t.set(e.toString(), r), t.delete(n));
        }),
        [t, a]
      );
    }
    function _(e, t) {
      var n,
        o =
          t.broadcastId != null &&
          r("WAWebWid").isWid(t.broadcastId) &&
          !!((n = t.broadcastId) != null && n.isBroadcastList());
      if (!o) return e;
      var a = d(e);
      return f(
        e,
        new (r("WAWebMsgKey"))({
          id: a.id,
          fromMe: a.fromMe,
          remote: a.remote,
        }),
      );
    }
    function f(e, t) {
      var n,
        o = u(e),
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
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.map(d),
            r;
          t === o("WAWebAddonConstants").AddonProcessMode.OnlineReceive &&
            (r = yield o("WAWebAddonPerfUtils").createMessagesQplMarker(
              o("WAWebAddonPerfUtils").AddonQplMarkerType.Incoming,
              {
                type: o("WAWebAddonPerfUtils").AnnotationRequestType
                  .BulkGetParentMsgs,
                size: n.length,
              },
            ));
          try {
            var a,
              i = yield y(e);
            return ((a = r) == null || a.success(), i);
          } catch (e) {
            var l;
            throw ((l = r) == null || l.fail(), e);
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(d),
            n = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey(t);
          return p(e, n);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var r = [];
            for (var a of o("WAWebAddonPluginProcessor")
              .getAddonProcessorsMap()
              .entries()) {
              var i = a[0],
                l = a[1];
              o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(i) &&
                r.push(l.convert.fromHistorySyncMsg(t));
            }
            var u = yield (s || (s = n("Promise"))).all(r).then(function (e) {
              var t;
              return (t = []).concat.apply(t, e);
            });
            return u;
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
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      var t = [],
        n = [],
        r = [];
      for (var a of e) {
        var i = a.parsedMsgPayload;
        if (o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(i.type)) {
          var l = m(i);
          l != null ? t.push(l) : n.push(a);
        } else
          i.kind === o("WAWebMsgType").MsgKind.ReactionDecrypted
            ? r.push(i)
            : n.push(a);
      }
      return { unifiedAddons: t, otherOrphans: n, legacyReactionAddons: r };
    }
    ((l.getParentMsgKey = d),
      (l.castToAddonMsgData = m),
      (l.updateMsgParentKeyValue = f),
      (l.queryAddonParentMsgs = g),
      (l.queryParentMsgs = y),
      (l.parseHistorySyncMsg = b),
      (l.sortAddonOrphans = S));
  },
  98,
);
