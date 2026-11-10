__d(
  "WAWebBizMessageAttributionFields",
  ["WAWebMsgGetters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /https?:\/\/[^\s<>\"{}|\\^`[\]]+/gi;
    function s(t) {
      var n;
      return t == null || t.length === 0
        ? []
        : (n = t.match(e)) != null
          ? n
          : [];
    }
    function u(e) {
      return e.replace(/[A-Z]/g, function (e) {
        return "_" + e.toLowerCase();
      });
    }
    var c = {
        chat: "conversation",
        hsm: "template_message",
        interactive: "interactive_message",
        image: "image_message",
        video: "video_message",
        document: "document_message",
        audio: "audio_message",
        ptt: "audio_message",
        ptv: "video_message",
        sticker: "sticker_message",
        location: "location_message",
        vcard: "contact_message",
        multi_vcard: "contact_message",
        list: "list_message",
        list_response: "list_response_message",
        buttons_response: "buttons_message",
        product: "product_message",
        order: "order_message",
        native_flow: "buttons_message",
        poll_creation: "poll_creation_message",
        reaction: "reaction_message",
      },
      d = ["urlButton", "quickReplyButton", "callButton"];
    function m(e, t, n) {
      var r,
        a,
        i = [],
        l = [],
        s = (a = o("WAWebMsgGetters")).getBody(e).length > 0,
        d = a.getCaption(e) != null,
        m = a.getFooter(e) != null,
        p = a.getTitle(e) != null,
        _ = s || d || m || p || t != null || n != null;
      if (!_) return { messagePaths: i, submessagePaths: l };
      var f = o("WAWebMsgGetters").getType(e),
        h = (r = c[f]) != null ? r : f;
      if ((i.push(h), t != null)) {
        l.push(h + ".hydrated_buttons");
        var y = new Set();
        for (var C of t)
          if (C != null && typeof C == "object" && !Array.isArray(C))
            for (var b of Object.keys(C)) {
              var v = C[b];
              v != null && typeof v == "object" && y.add(u(b));
            }
        for (var S of y) l.push(h + ".hydrated_buttons." + S);
      }
      return (
        n != null && l.push.apply(l, g(f, h)),
        { messagePaths: i, submessagePaths: l }
      );
    }
    function p(e, t) {
      var n = [];
      if (e != null) {
        for (var r of e)
          if (r != null && typeof r == "object" && !Array.isArray(r)) {
            for (var o of d)
              if (r[o] != null) {
                n.push(u(o));
                break;
              }
          }
      }
      if (t != null) {
        for (var a of t)
          if (a != null && typeof a == "object" && !Array.isArray(a)) {
            var i = a.name;
            typeof i == "string" && i.length > 0 && n.push(i);
          }
      }
      return n;
    }
    function _(e, t) {
      var n = [];
      if (e != null) {
        for (var r of e)
          if (r != null && typeof r == "object" && !Array.isArray(r)) {
            var o = r.urlButton;
            if (o != null && typeof o == "object" && !Array.isArray(o)) {
              var a = o.url;
              typeof a == "string" && a.length > 0 && n.push(a);
            }
          }
      }
      if (t != null) {
        for (var i of t)
          if (i != null && typeof i == "object" && !Array.isArray(i)) {
            var l = i;
            if (l.name === "cta_url") {
              var s = l.buttonParamsJson;
              if (typeof s == "string")
                try {
                  var u = JSON.parse(s);
                  if (u != null && typeof u == "object" && !Array.isArray(u)) {
                    var c = u.url;
                    typeof c == "string" && c.length > 0 && n.push(c);
                  }
                } catch (e) {}
            }
          }
      }
      return n;
    }
    function f(e) {
      return Array.isArray(e)
        ? e
            .map(function (e) {
              if (e == null || typeof e != "object" || Array.isArray(e))
                return null;
              var t = e.nativeFlowInfo;
              if (t == null || typeof t != "object" || Array.isArray(t))
                return null;
              var n = t;
              return { name: n.name, buttonParamsJson: n.paramsJson };
            })
            .filter(function (e) {
              return e != null;
            })
        : null;
    }
    function g(e, t) {
      return e === "interactive"
        ? [t + ".native_flow_message", t + ".native_flow_message.buttons"]
        : [t + ".buttons", t + ".buttons.native_flow_info"];
    }
    function h(e) {
      var t = e,
        n = t.hydratedButtons,
        r = Array.isArray(n) && n.length > 0 ? n : null,
        a = (function (n) {
          if (n === "interactive") {
            var r;
            return (r = o("WAWebMsgGetters").getInteractivePayload(e)) == null
              ? void 0
              : r.buttons;
          }
          return n === "native_flow" ? f(t.nativeFlowButtons) : null;
        })(o("WAWebMsgGetters").getType(e)),
        i = Array.isArray(a) && a.length > 0 ? a : null,
        l = m(e, r, i),
        u = l.messagePaths,
        c = l.submessagePaths,
        d = p(r, i),
        g = [].concat(
          s(o("WAWebMsgGetters").getBody(e)),
          s(o("WAWebMsgGetters").getCaption(e)),
          s(o("WAWebMsgGetters").getFooter(e)),
          s(o("WAWebMsgGetters").getTitle(e)),
        ),
        h = g.length,
        y = new Set(
          g.map(function (e) {
            return e.toLowerCase();
          }),
        ),
        C = y.size,
        b = _(r, i),
        v = new Set(
          b.map(function (e) {
            return e.toLowerCase();
          }),
        ),
        S = v.size,
        R = new Set([].concat(Array.from(y), Array.from(v))),
        L = R.size;
      return {
        messageFieldJsonArray: u.length > 0 ? JSON.stringify(u) : void 0,
        submessageFieldJsonArray: c.length > 0 ? JSON.stringify(c) : void 0,
        buttonValueJsonArray: d.length > 0 ? JSON.stringify(d) : void 0,
        bodyUrlCountInt: h,
        bodyUrlUniqueCountInt: C,
        ctaUrlUniqueCountInt: S,
        urlUniqueCountInt: L,
      };
    }
    l.extractBizMessageAttribution = h;
  },
  98,
);
