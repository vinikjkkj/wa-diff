__d(
  "MAWBridgeBuildMsgMentions",
  [
    "MAWSubscribeToContactNames",
    "MAWThreadCustomizationUtils",
    "WACommon.pb",
    "WAJids",
    "emptyFunction",
    "fillArray",
    "mapPull",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.length > 0 ? e.join(",") : void 0;
    }
    function s(e, t) {
      return e.index - t.index;
    }
    function u(e, t) {
      return e == null || e === ""
        ? e
        : Array.from(t).reduce(function (e, t) {
            var n = t[0],
              r = t[1],
              o = new RegExp(n, "g");
            return e.replace(o, r);
          }, e);
    }
    function c(e, t) {
      return e == null || e === ""
        ? []
        : Array.from(t.keys())
            .flatMap(function (t) {
              return Array.from(e.matchAll(t));
            })
            .sort(s);
    }
    function d(t, n, a, i, l) {
      l === void 0 && (l = []);
      var s = r("mapPull")(
          a,
          function (e) {
            var t = e[0],
              r = e[1];
            return o("MAWSubscribeToContactNames").getContactNameFromLookup(
              n,
              t,
            );
          },
          function (e) {
            var t = e[0],
              n = e[1];
            return n;
          },
        ),
        d = c(t, s),
        m = [],
        p = [],
        _ = [],
        f = 0;
      for (var g of d) {
        var h = o("WAJids").unsafeCoerceToUserJid(g[0]);
        m.push(o("WAJids").userIdFromJid(h));
        var y = o("MAWSubscribeToContactNames").getContactNameFromLookup(s, h);
        (p.push(y.length + 1),
          _.push(Math.max(g.index - 1 + f, 0)),
          (f += y.length - h.length));
      }
      var C = r("fillArray")(m.length, "p");
      for (var b of l) {
        var v = b.commandType,
          S = b.length,
          R = b.offset;
        if (!(S == null || R == null))
          switch (v) {
            case o("WACommon.pb").COMMAND_COMMAND_TYPE.EVERYONE:
              (C.push("t"), m.push("t"), _.push(R), p.push(S));
              break;
            case o("WACommon.pb").COMMAND_COMMAND_TYPE.AI:
              (C.push("ai"), m.push("ai"), _.push(R), p.push(S));
              break;
            case o("WACommon.pb").COMMAND_COMMAND_TYPE.AI_IMAGINE:
              (C.push("im"), m.push("im"), _.push(R), p.push(S));
              break;
            default:
              break;
          }
      }
      var L = c(i, s);
      for (var E of L) {
        var k = o("WAJids").unsafeCoerceToUserJid(E[0]);
        m.push(o("WAJids").userIdFromJid(k));
      }
      return {
        mentionIds: e(m),
        mentionLengths: e(p),
        mentionOffsets: e(_),
        mentionTypes: e(C),
        replyMessageText: u(i, s),
        text: u(t, s),
      };
    }
    function m(e, t, n, r) {
      var a = d(e, n, r),
        i = a.text,
        l = t.map(function (e) {
          return o("MAWSubscribeToContactNames").getContactNameFromLookup(n, e);
        });
      return [i, l];
    }
    function p(e, t, n, a) {
      var i = r("mapPull")(
        t,
        r("emptyFunction").thatReturnsArgument,
        o("WAJids").userIdFromJid,
      );
      return d(e, i, i, n, a);
    }
    function _(e, t, n, r, a) {
      return (t && n > 0) || r
        ? a === o("MAWSubscribeToContactNames").ContactNameMode.FIRST_NAME
          ? "$CONTACT_FIRST_NAME(" + e + ")"
          : "$CONTACT_FULL_NAME(" + e + ")"
        : a === o("MAWSubscribeToContactNames").ContactNameMode.FIRST_NAME
          ? "$PARTICIPANT_FIRST_NAME(" + e + ")"
          : "$PARTICIPANT_FULL_NAME(" + e + ")";
    }
    function f(e, t, n, a) {
      var i = r("mapPull")(
        t != null ? t : [],
        r("emptyFunction").thatReturnsArgument,
        o("WAJids").userIdFromJid,
      );
      if (i.size === 0 || e == null || e === "") {
        var l = o(
            "MAWSubscribeToContactNames",
          ).getContactNameModeFromLocalizationType(a),
          s = o(
            "MAWThreadCustomizationUtils",
          ).nicknameOnlyForFirstParticipantChecking(a),
          u = o("MAWThreadCustomizationUtils").skipNicknameCheck(a),
          c = n.map(function (e, t) {
            return _(e, s, t, u, l);
          });
        return [e, c];
      }
      var d = new Map(
        [].concat(Array.from(i.keys()), n).map(function (e) {
          return [e, "$PARTICIPANT_FULL_NAME(" + e + ")"];
        }),
      );
      return m(e, n, d, i);
    }
    ((l.buildMsgTextWithMentions = p), (l.buildThreadSnippetWithMentions = f));
  },
  98,
);
