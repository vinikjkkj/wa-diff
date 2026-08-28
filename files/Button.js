__d(
  "Button",
  [
    "csx",
    "cx",
    "invariant",
    "CSS",
    "DOM",
    "DataStore",
    "Event",
    "Parent",
    "emptyFunction",
    "isNode",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    var e = "uiButtonDisabled",
      d = "uiButtonDepressed",
      m = "_42fr",
      p = "_42fs",
      _ = "button:blocker",
      f = "href",
      g = "ajaxify";
    function h(e, t) {
      var n = o("DataStore").get(e, _);
      t
        ? n && (n.remove(), o("DataStore").remove(e, _))
        : n ||
          o("DataStore").set(
            e,
            _,
            r("Event").listen(
              e,
              "click",
              r("emptyFunction").thatReturnsFalse,
              r("Event").Priority.URGENT,
            ),
          );
    }
    function y(e) {
      var t =
        o("Parent").byClass(e, "uiButton") ||
        o("Parent").bySelector(e, "._42ft");
      if (!t) {
        var n = new Error("invalid use case");
        throw (n.stack, n);
      }
      return t;
    }
    function C(e) {
      return r("DOM").isNodeOfType(e, "a");
    }
    function b(e) {
      return r("DOM").isNodeOfType(e, "button");
    }
    function v(e) {
      return o("CSS").matchesSelector(e, "._42ft");
    }
    var S = {
        getInputElement: function (t) {
          var e = y(t);
          if (C(e)) {
            var n = new Error("invalid use case");
            throw (n.stack, n);
          }
          return b(e)
            ? (e instanceof HTMLButtonElement || c(0, 21261), e)
            : r("DOM").find(e, "input");
        },
        isEnabled: function (n) {
          return !(o("CSS").hasClass(y(n), e) || o("CSS").hasClass(y(n), m));
        },
        setEnabled: function (n, r) {
          var t = y(n),
            a = v(t) ? m : e;
          if ((o("CSS").conditionClass(t, a, !r), C(t))) {
            var i = t.getAttribute("href"),
              l = t.getAttribute("ajaxify"),
              s = o("DataStore").get(t, f, "#"),
              u = o("DataStore").get(t, g);
            (r
              ? (i || t.setAttribute("href", s),
                !l && u && t.setAttribute("ajaxify", u),
                t.removeAttribute("tabIndex"))
              : (i && i !== s && o("DataStore").set(t, f, i),
                l && l !== u && o("DataStore").set(t, g, l),
                t.removeAttribute("href"),
                t.removeAttribute("ajaxify"),
                t.setAttribute("tabIndex", "-1")),
              h(t, r));
          } else {
            var c = S.getInputElement(t);
            ((c.disabled = !r), h(c, r));
          }
        },
        setDepressed: function (t, n) {
          var e = y(t),
            r = v(e) ? p : d;
          o("CSS").conditionClass(e, r, n);
        },
        isDepressed: function (t) {
          var e = y(t),
            n = v(e) ? p : d;
          return o("CSS").hasClass(e, n);
        },
        setLabel: function (t, n) {
          var e = y(t);
          if (v(e)) {
            var a = [];
            n && a.push(n);
            for (var i = r("DOM").scry(e, ".img"), l = 0; l < i.length; l++) {
              var s = i[l],
                u = s.parentNode;
              u.classList &&
              (u.classList.contains("_4o_3") || u.classList.contains("_-xe"))
                ? e.firstChild === u
                  ? a.unshift(u)
                  : a.push(u)
                : e.firstChild == s
                  ? a.unshift(s)
                  : a.push(s);
            }
            r("DOM").setContent(e, a);
          } else if (C(e)) {
            var c = r("DOM").find(e, "span.uiButtonText");
            r("DOM").setContent(c, n);
          } else S.getInputElement(e).value = n;
          var d = v(e) ? "_42fv" : "uiButtonNoText";
          o("CSS").conditionClass(e, d, !n);
        },
        getIcon: function (t) {
          var e = y(t);
          return r("DOM").scry(e, ".img")[0];
        },
        setIcon: function (t, n) {
          if (!(n && !r("isNode")(n))) {
            var e = S.getIcon(t);
            if (!n) {
              e && r("DOM").remove(e);
              return;
            }
            (o("CSS").addClass(n, "customimg"),
              e != n &&
                (e
                  ? r("DOM").replace(e, n)
                  : r("DOM").prependContent(y(t), n)));
          }
        },
      },
      R = S;
    l.default = R;
  },
  98,
);
