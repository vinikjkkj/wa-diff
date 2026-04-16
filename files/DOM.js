__d(
  "DOM",
  [
    "$",
    "DOMQuery",
    "Event",
    "FBLogger",
    "FbtResultBase",
    "HTML",
    "UserAgent_DEPRECATED",
    "createArrayFromMixed",
    "err",
    "fb-error",
    "isNode",
    "isScalar",
    "isTextNode",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = function (t, n, r) {
        var e = document.createElement(t);
        return (n && u.setAttributes(e, n), r != null && u.setContent(e, r), e);
      },
      u = {
        find: (e = o("DOMQuery")).find,
        findPushSafe: e.findPushSafe,
        scry: e.scry,
        getSelection: e.getSelection,
        contains: e.contains,
        getRootElement: e.getRootElement,
        isNodeOfType: e.isNodeOfType,
        isInputNode: e.isInputNode,
        create: s,
        setAttributes: function (t, n) {
          n.type && (t.type = n.type);
          for (var e in n) {
            var o = n[e],
              a = /^on/i.test(e);
            (a &&
              typeof o != "function" &&
              r("FBLogger")("dom").warn(
                "Handlers passed to DOM.setAttributes must be functions. Handler passed for %s was %s",
                e,
                typeof o,
              ),
              e != "type" &&
                (e == "style"
                  ? typeof o == "string"
                    ? (t.style.cssText = o)
                    : Object.assign(t.style, o)
                  : a
                    ? r("Event").listen(t, e.substr(2), o)
                    : e in t
                      ? (t[e] = o)
                      : t.setAttribute && t.setAttribute(e, o)));
          }
        },
        prependContent: function (t, n) {
          if (!t)
            throw r("fb-error").TAAL.blameToPreviousFile(
              r("err")("reference element is not a node"),
            );
          return d(n, t, function (e) {
            t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e);
          });
        },
        insertAfter: function (t, n) {
          if (!t || !t.parentNode)
            throw r("fb-error").TAAL.blameToPreviousFile(
              r("err")("reference element does not have a parent"),
            );
          var e = t.parentNode;
          return d(n, e, function (n) {
            t.nextSibling ? e.insertBefore(n, t.nextSibling) : e.appendChild(n);
          });
        },
        insertBefore: function (t, n) {
          if (!t || !t.parentNode)
            throw r("fb-error").TAAL.blameToPreviousFile(
              r("err")("reference element does not have a parent"),
            );
          var e = t.parentNode;
          return d(n, e, function (n) {
            e.insertBefore(n, t);
          });
        },
        setContent: function (t, n) {
          if (!t)
            throw r("fb-error").TAAL.blameToPreviousFile(
              r("err")("reference element is not a node"),
            );
          for (; t.firstChild; ) c(t.firstChild);
          return u.appendContent(t, n);
        },
        appendContent: function (t, n) {
          if (!t)
            throw r("fb-error").TAAL.blameToPreviousFile(
              r("err")("reference element is not a node"),
            );
          return d(n, t, function (e) {
            t.appendChild(e);
          });
        },
        replace: function (t, n) {
          if (!t || !t.parentNode)
            throw r("fb-error").TAAL.blameToPreviousFile(
              r("err")("reference element does not have a parent"),
            );
          var e = t.parentNode;
          return d(n, e, function (n) {
            e.replaceChild(n, t);
          });
        },
        remove: function (t) {
          c(typeof t == "string" ? r("$")(t) : t);
        },
        empty: function (t) {
          for (t = typeof t == "string" ? r("$")(t) : t; t.firstChild; )
            c(t.firstChild);
        },
      };
    function c(e) {
      e.parentNode && e.parentNode.removeChild(e);
    }
    function d(e, t, n) {
      if (
        ((e = r("HTML").replaceJSONWrapper(e)),
        e instanceof r("HTML") &&
          t.firstChild === null &&
          e.toString().indexOf("<script") === -1)
      ) {
        var a = o("UserAgent_DEPRECATED").ie();
        if (
          !a ||
          (a > 7 &&
            !o("DOMQuery").isNodeOfType(t, [
              "table",
              "tbody",
              "thead",
              "tfoot",
              "tr",
              "select",
              "fieldset",
            ]))
        ) {
          var i = a
            ? '<em style="display:none;">&nbsp;</em>' + e.toString()
            : e.toString();
          return (
            (t.innerHTML = i),
            a && t.removeChild(t.firstChild),
            Array.from(t.childNodes)
          );
        }
      } else if (r("isTextNode")(t)) return ((t.data = e), [e]);
      var l = document.createDocumentFragment(),
        s,
        u = [],
        c = [],
        d = !1;
      ((e = r("createArrayFromMixed")(e)),
        e.length === 1 &&
          e[0] instanceof r("FbtResultBase") &&
          (e = e[0].getContents()));
      for (var m = 0; m < e.length; m++)
        if (
          ((s = r("HTML").replaceJSONWrapper(e[m])), s instanceof r("HTML"))
        ) {
          c.push(s.getAction());
          var p = s.getNodes();
          !d &&
            s.hasInlineJs() &&
            (r("FBLogger")("staticresources").warn(
              "DOM: adding HTML which contains inline JS",
            ),
            (d = !0));
          for (var _ = 0; _ < p.length; _++)
            (u.push(p[_]), l.appendChild(p[_]));
        } else if (r("isScalar")(s) || s instanceof r("FbtResultBase")) {
          var f = document.createTextNode(s);
          (u.push(f), l.appendChild(f));
        } else
          r("isNode")(s)
            ? (u.push(s), l.appendChild(s))
            : (Array.isArray(s) &&
                r("FBLogger")("dom").warn("Nest arrays not supported"),
              s !== null &&
                r("FBLogger")("dom").warn("No way to set content %s", s));
      return (
        n(l),
        c.forEach(function (e) {
          e();
        }),
        u
      );
    }
    var m = u;
    l.default = m;
  },
  98,
);
