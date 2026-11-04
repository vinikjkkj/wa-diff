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
          for (var e = typeof t == "string" ? r("$")(t) : t; e.firstChild; )
            c(e.firstChild);
        },
      };
    function c(e) {
      e.parentNode && e.parentNode.removeChild(e);
    }
    function d(e, t, n) {
      var a = r("HTML").replaceJSONWrapper(e);
      if (
        a instanceof r("HTML") &&
        t.firstChild === null &&
        a.toString().indexOf("<script") === -1
      ) {
        var i = o("UserAgent_DEPRECATED").ie();
        if (
          !i ||
          (i > 7 &&
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
          var l = i
            ? '<em style="display:none;">&nbsp;</em>' + a.toString()
            : a.toString();
          return (
            (t.innerHTML = l),
            i && t.removeChild(t.firstChild),
            Array.from(t.childNodes)
          );
        }
      } else if (r("isTextNode")(t)) return ((t.data = a), [a]);
      var s = document.createDocumentFragment(),
        u,
        c = [],
        d = [],
        m = !1;
      ((a = r("createArrayFromMixed")(a)),
        a.length === 1 &&
          a[0] instanceof r("FbtResultBase") &&
          (a = a[0].getContents()));
      for (var p = 0; p < a.length; p++)
        if (
          ((u = r("HTML").replaceJSONWrapper(a[p])), u instanceof r("HTML"))
        ) {
          d.push(u.getAction());
          var _ = u.getNodes();
          !m &&
            u.hasInlineJs() &&
            (r("FBLogger")("staticresources").warn(
              "DOM: adding HTML which contains inline JS",
            ),
            (m = !0));
          for (var f = 0; f < _.length; f++)
            (c.push(_[f]), s.appendChild(_[f]));
        } else if (r("isScalar")(u) || u instanceof r("FbtResultBase")) {
          var g = document.createTextNode(u);
          (c.push(g), s.appendChild(g));
        } else
          r("isNode")(u)
            ? (c.push(u), s.appendChild(u))
            : (Array.isArray(u) &&
                r("FBLogger")("dom").warn("Nest arrays not supported"),
              u !== null &&
                r("FBLogger")("dom").warn("No way to set content %s", u));
      return (
        n(s),
        d.forEach(function (e) {
          e();
        }),
        c
      );
    }
    var m = u;
    l.default = m;
  },
  98,
);
