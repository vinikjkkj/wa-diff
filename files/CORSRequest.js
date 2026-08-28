__d(
  "CORSRequest",
  [
    "Log",
    "QueryString",
    "RequestConstants",
    "sdk.safelyParseResponse",
    "wrapFunction",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var o;
      if ((n === void 0 && (n = { withCredentials: !1 }), !self.XMLHttpRequest))
        return null;
      var a;
      a = new XMLHttpRequest();
      var i = function () {};
      if (
        ((o = n) != null && o.withCredentials && (a.withCredentials = !0),
        "withCredentials" in a)
      )
        (a.open(e, t, !0),
          a.setRequestHeader(
            "Content-type",
            "application/x-www-form-urlencoded",
          ));
      else if (self.XDomainRequest) {
        a = new XDomainRequest();
        try {
          (a.open(e === "get" || e === "GET" ? "GET" : "POST", t),
            (a.onprogress = a.ontimeout = i));
        } catch (e) {
          return null;
        }
      } else return null;
      var l = {
          send: function (t) {
            a.send(t);
          },
        },
        s = r("wrapFunction")(
          function () {
            ((s = i), l.onload != null && l.onload(a));
          },
          "entry",
          "XMLHttpRequest:load",
        ),
        u = r("wrapFunction")(
          function () {
            ((u = i), l.onerror != null && l.onerror(a));
          },
          "entry",
          "XMLHttpRequest:error",
        );
      return (
        (a.onload = function () {
          s();
        }),
        (a.onerror = function () {
          u();
        }),
        a instanceof XMLHttpRequest &&
          (a.onreadystatechange = function () {
            a.readyState === 4 && (a.status === 200 ? s() : u());
          }),
        l
      );
    }
    var s = "for (;;);",
      u = s.length;
    function c(e) {
      return (e.substring(0, u) == s && (e = e.substring(u)), e);
    }
    function d(t, n, a, i, l) {
      if (
        (l === void 0 && (l = { withCredentials: !1 }),
        t.includes("/../") ||
          t.includes("/..\\") ||
          t.includes("\\../") ||
          t.includes("\\..\\"))
      )
        return (
          o("Log").error(
            "CORSRequest.execute(): path traversal is not allowed.",
          ),
          !1
        );
      a.suppress_http_code = 1;
      var s = r("QueryString").encode(a);
      n === "get" && ((t = r("QueryString").appendToUrl(t, s)), (s = ""));
      var u = e(n, t, l);
      return u
        ? ((u.onload = function (e) {
            i(r("sdk.safelyParseResponse")(c(e.responseText), t, e.status));
          }),
          (u.onerror = function (e) {
            e.responseText
              ? i(r("sdk.safelyParseResponse")(c(e.responseText), t, e.status))
              : i({
                  error: babelHelpers.extends(
                    {},
                    o("RequestConstants").PARSE_ERROR_TEMPLATE,
                    { status: e.status },
                  ),
                });
          }),
          u.send(s),
          !0)
        : !1;
    }
    var m = { execute: d },
      p = m;
    l.default = p;
  },
  98,
);
