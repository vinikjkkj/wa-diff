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
        native_flow: "interactive_message",
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
        g = (r = c[f]) != null ? r : f;
      if ((i.push(g), t != null)) {
        l.push(g + ".hydrated_buttons");
        var h = new Set();
        for (var y of t)
          if (y != null && typeof y == "object" && !Array.isArray(y))
            for (var C of Object.keys(y)) {
              var b = y[C];
              b != null && typeof b == "object" && h.add(u(C));
            }
        for (var v of h) l.push(g + ".hydrated_buttons." + v);
      }
      return (
        n != null && l.push(g + ".buttons"),
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
      var t = e,
        n = t.hydratedButtons,
        r = Array.isArray(n) && n.length > 0 ? n : null,
        a = t.nativeFlowButtons,
        i = Array.isArray(a) && a.length > 0 ? a : null,
        l = m(e, r, i),
        u = l.messagePaths,
        c = l.submessagePaths,
        d = p(r, i),
        f = [].concat(
          s(o("WAWebMsgGetters").getBody(e)),
          s(o("WAWebMsgGetters").getCaption(e)),
          s(o("WAWebMsgGetters").getFooter(e)),
          s(o("WAWebMsgGetters").getTitle(e)),
        ),
        g = f.length,
        h = new Set(
          f.map(function (e) {
            return e.toLowerCase();
          }),
        ),
        y = h.size,
        C = _(r, i),
        b = new Set(
          C.map(function (e) {
            return e.toLowerCase();
          }),
        ),
        v = b.size,
        S = new Set([].concat(Array.from(h), Array.from(b))),
        R = S.size;
      return {
        messageFieldJsonArray: u.length > 0 ? JSON.stringify(u) : void 0,
        submessageFieldJsonArray: c.length > 0 ? JSON.stringify(c) : void 0,
        buttonValueJsonArray: d.length > 0 ? JSON.stringify(d) : void 0,
        bodyUrlCountInt: g,
        bodyUrlUniqueCountInt: y,
        ctaUrlUniqueCountInt: v,
        urlUniqueCountInt: R,
      };
    }
    l.extractBizMessageAttribution = f;
  },
  98,
);
