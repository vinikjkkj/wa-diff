__d(
  "WAGroupParserUtils",
  ["WAGroupInviteUtils", "WAJids", "WALogger", "WAResultOrError", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        superadmin: "superadmin",
        admin: "admin",
        participant: "participant",
        nonparticipant: "nonparticipant",
      };
    function u(t) {
      if (!t.hasAttr("error"))
        throw r("err")("Expected participant node to have error attr");
      var n = t.attrInt("error"),
        a = t.attrUserJid("jid");
      switch (n) {
        case 401:
          return { errorCode: n, text: "not-authorized", user: a };
        case 403: {
          var i = t.child("add_request");
          return {
            errorCode: n,
            text: "request-code",
            code: o("WAGroupInviteUtils").toInviteCode(i.attrString("code")),
            expiration: i.attrTime("expiration"),
            user: a,
          };
        }
        case 404:
          return { errorCode: n, text: "not-found", user: a };
        case 406:
          return { errorCode: n, text: "enterprise-not-allowed", user: a };
        case 408:
          return { errorCode: n, text: "temporarily-blocked", user: a };
        case 409:
          return { errorCode: n, text: "conflict", user: a };
        case 500:
          return { errorCode: n, text: "resource-constraint", user: a };
        default:
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "received unknown participant error code: ",
                  "",
                ])),
              n,
            ),
            { errorCode: -1, text: "unknown", user: a }
          );
      }
    }
    function c(e, t) {
      e.assertTag("participant");
      var n = "participant";
      switch (t) {
        case "add":
        case "demote":
          n = "participant";
          break;
        case "promote":
          n = "admin";
          break;
        case "remove":
          n = "nonparticipant";
          break;
      }
      var r = e.attrUserJid("jid");
      if (e.hasAttr("error")) {
        var a = u(e);
        return o("WAResultOrError").makeError(a);
      } else {
        var i,
          l = (i = e.maybeAttrEnum("type", s)) != null ? i : n,
          c = e.maybeAttrString("addressable") !== "false";
        return o("WAResultOrError").makeResult({
          user: r,
          type: l,
          addressable: c,
        });
      }
    }
    function d(e) {
      var t;
      e.assertTag("group");
      var n = null,
        r = e.attrString("id");
      return (
        r.includes("@")
          ? (n = e.attrGroupJid("id"))
          : (n = o("WAJids").toGroupJid(r)),
        {
          jid: n,
          creator: e.maybeAttrUserJid("creator") || void 0,
          creationTs: e.attrTime("creation"),
          subject: {
            content: e.maybeAttrString("subject") || void 0,
            user: e.maybeAttrUserJid("s_o") || void 0,
            ts: (t = e.maybeAttrTime("s_t")) != null ? t : void 0,
          },
          description: p(e) || void 0,
          participantVersion: e.maybeAttrString("p_v_id") || void 0,
          participants: e.mapChildrenWithTag("participant", function (e) {
            return c(e);
          }),
          memberAddMode: m(e) || void 0,
        }
      );
    }
    function m(e) {
      if (e.hasChild("member_add_mode")) {
        var t = e.child("member_add_mode");
        if (t.hasContent()) {
          var n = t.contentString();
          if (n === "admin_add" || n === "all_member_add") return n;
        }
      }
      return null;
    }
    function p(e) {
      if (e.hasChild("description")) {
        var t = e.child("description");
        if (t.hasChild("body")) {
          var n = t.child("body");
          if (n.hasContent())
            return {
              id: t.attrString("id"),
              ts: t.attrTime("t"),
              content: n.contentString(),
              user: n.maybeAttrUserJid("participant") || void 0,
            };
        }
      }
      return null;
    }
    l.parseGroupNode = d;
  },
  98,
);
