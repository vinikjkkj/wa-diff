__d(
  "stylex-runtime",
  ["styleq"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (t) {
        return new Error(
          "Unexpected 'stylex." +
            t +
            "' call at runtime. Styles must be compiled by '@stylexjs/babel-plugin'.",
        );
      },
      u = function (t) {
        return s("types." + t);
      },
      c = function (t) {
        throw s("create");
      },
      d = function (t, n) {
        throw s("createTheme");
      },
      m = function (t) {
        throw s("defineConsts");
      },
      p = function (t) {
        throw s("defineVars");
      },
      _ = function () {
        throw s("defineMarker");
      },
      f = function () {
        throw s("firstThatWorks");
      },
      g = function (t) {
        throw s("keyframes");
      },
      h = function (t) {
        throw s("positionTry");
      };
    function y() {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      var a = (e || (e = o("styleq"))).styleq(n),
        i = a[0],
        l = a[1],
        s = a[2],
        u = {};
      return (
        i != null && i !== "" && (u.className = i),
        l != null && Object.keys(l).length > 0 && (u.style = l),
        s != null && s !== "" && (u["data-style-src"] = s),
        u
      );
    }
    var C = function (t) {
      return t.replace(/([A-Z])/g, "-$1").toLowerCase();
    };
    function b() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = y.apply(this, t),
        o = r.className,
        a = r.style,
        i = r["data-style-src"],
        l = {};
      return (
        o != null && (l.class = o),
        a != null &&
          (l.style = Object.entries(a)
            .map(function (e) {
              var t = e[0],
                n = e[1];
              return C(t) + ":" + n;
            })
            .join(";")),
        i != null && (l["data-style-src"] = i),
        l
      );
    }
    var v = function (t) {
        throw s("viewTransitionClass");
      },
      S = function () {
        throw s("defaultMarker");
      },
      R = {
        ancestor: function (t) {
          throw s("when.ancestor");
        },
        descendant: function (t) {
          throw s("when.descendant");
        },
        siblingBefore: function (t) {
          throw s("when.siblingBefore");
        },
        siblingAfter: function (t) {
          throw s("when.siblingAfter");
        },
        anySibling: function (t) {
          throw s("when.anySibling");
        },
      },
      L = Object.freeze({}),
      E = {
        angle: function (t) {
          throw u("angle");
        },
        color: function (t) {
          throw u("color");
        },
        url: function (t) {
          throw u("url");
        },
        image: function (t) {
          throw u("image");
        },
        integer: function (t) {
          throw u("integer");
        },
        lengthPercentage: function (t) {
          throw u("lengthPercentage");
        },
        length: function (t) {
          throw u("length");
        },
        percentage: function (t) {
          throw u("percentage");
        },
        number: function (t) {
          throw u("number");
        },
        resolution: function (t) {
          throw u("resolution");
        },
        time: function (t) {
          throw u("time");
        },
        transformFunction: function (t) {
          throw u("transformFunction");
        },
        transformList: function (t) {
          throw u("transformList");
        },
      };
    function k() {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      var a = (e || (e = o("styleq"))).styleq(n),
        i = a[0];
      return i;
    }
    ((k.create = c),
      (k.createTheme = d),
      (k.defineConsts = m),
      (k.defineMarker = _),
      (k.defineVars = p),
      (k.defaultMarker = S),
      (k.firstThatWorks = f),
      (k.keyframes = g),
      (k.positionTry = h),
      (k.props = y),
      (k.attrs = b),
      (k.types = E),
      (k.when = R),
      (k.viewTransitionClass = v),
      (k.env = L));
    var I = k;
    ((l.create = c),
      (l.createTheme = d),
      (l.defineConsts = m),
      (l.defineVars = p),
      (l.defineMarker = _),
      (l.firstThatWorks = f),
      (l.keyframes = g),
      (l.positionTry = h),
      (l.props = y),
      (l.attrs = b),
      (l.viewTransitionClass = v),
      (l.defaultMarker = S),
      (l.when = R),
      (l.env = L),
      (l.types = E),
      (l.legacyMerge = I));
  },
  98,
);
