__d(
  "AdsInterfacesGenericRoute",
  [
    "invariant",
    "AdsInterfacesICERoute",
    "AdsInterfacesRouteTypeFBID",
    "AdsInterfacesRouteTypeFloat",
    "AdsInterfacesRouteTypeInt",
    "AdsInterfacesRouteTypeString",
    "areEqual",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("AdsInterfacesICERoute"));
    ((u.routeName = "AdsInterfacesGenericRoute"),
      (u.givenName = "genericRoot"),
      (u.handler = {
        decodeParameter: function (t, n, r, o, a) {
          var e = null;
          if (o == null) return o;
          switch (r.toLowerCase()) {
            case "enum":
              e = c(n, o, a.defaultValue, a.enums);
              break;
            case "string":
            case "fbid":
              e = o;
              break;
            case "int":
              e = parseInt(o, 10);
              break;
            case "float":
            case "number":
              e = parseFloat(o);
              break;
            case "boolean":
              o === "false" || o === "" || o === "0" ? (e = !1) : (e = !!o);
              break;
            default:
              e = d(t, n, r, o, a);
          }
          return e;
        },
        encodeParameter: function (t, n, r, o, a) {
          var e = null;
          if (o == null) return o;
          switch (r.toLowerCase()) {
            case "enum":
              e = c(n, o, a.defaultValue, a.enums);
              break;
            case "string":
            case "fbid":
              e = String(o);
              break;
            case "int":
            case "float":
            case "number":
              e = Number(o) + "";
              break;
            case "boolean":
              e = o ? "true" : "false";
              break;
            default:
              e = m(t, n, r, o, a);
          }
          return e;
        },
      }));
    function c(t, n, o, a) {
      var i = String(n);
      Array.isArray(a) || s(0, 6124, t);
      var l = a.some(function (t) {
        return (e || (e = r("areEqual")))(t, n);
      });
      return (l || (i = String(o)), i);
    }
    function d(e, t, n, r, a) {
      var i = null;
      switch (n.toLowerCase()) {
        case "stringarray":
        case "array<string>":
          i = o("AdsInterfacesRouteTypeString").decodeArray(n, r);
          break;
        case "stringorderedset":
        case "stringset":
        case "orderedset<set>":
        case "set<string>":
          i = o("AdsInterfacesRouteTypeString").decodeOrderedSet(n, r);
          break;
        case "stringlist":
        case "list<string>":
          i = o("AdsInterfacesRouteTypeString").decodeList(n, r);
          break;
        case "fbidarray":
        case "array<fbid>":
          i = o("AdsInterfacesRouteTypeFBID").decodeArray(n, r);
          break;
        case "fbidorderedset":
        case "fbidset":
        case "orderedset<fbid>":
        case "set<fbid>":
          i = o("AdsInterfacesRouteTypeFBID").decodeOrderedSet(n, r);
          break;
        case "fbidlist":
        case "list<fbid>":
          i = o("AdsInterfacesRouteTypeFBID").decodeList(n, r);
          break;
        case "floatarray":
        case "array<float>":
        case "numberarray":
        case "array<number>":
          i = o("AdsInterfacesRouteTypeFloat").decodeArray(n, r);
          break;
        case "floatorderedset":
        case "floatset":
        case "orderedset<float>":
        case "set<float>":
        case "numberorderedset":
        case "numberset":
        case "orderedset<number>":
        case "set<number>":
          i = o("AdsInterfacesRouteTypeFloat").decodeOrderedSet(n, r);
          break;
        case "floatlist":
        case "list<float>":
        case "numberlist":
        case "list<number>":
          i = o("AdsInterfacesRouteTypeFloat").decodeList(n, r);
          break;
        case "intarray":
        case "array<int>":
          i = o("AdsInterfacesRouteTypeInt").decodeArray(n, r);
          break;
        case "intorderedset":
        case "intset":
        case "orderedset<int>":
        case "set<int>":
          i = o("AdsInterfacesRouteTypeInt").decodeOrderedSet(n, r);
          break;
        case "intlist":
        case "list<int>":
          i = o("AdsInterfacesRouteTypeInt").decodeList(n, r);
          break;
      }
      return i;
    }
    function m(e, t, n, r, a) {
      var i = null;
      switch (n.toLowerCase()) {
        case "stringarray":
        case "array<string>":
          i = o("AdsInterfacesRouteTypeString").encodeArray(n, r);
          break;
        case "stringorderedset":
        case "stringset":
        case "orderedset<string>":
        case "set<string>":
          i = o("AdsInterfacesRouteTypeString").encodeOrderedSet(n, r);
          break;
        case "stringlist":
        case "list<string>":
          i = o("AdsInterfacesRouteTypeString").encodeList(n, r);
          break;
        case "fbidarray":
        case "array<fbid>":
          i = o("AdsInterfacesRouteTypeFBID").encodeArray(n, r);
          break;
        case "fbidorderedset":
        case "fbidset":
        case "orderedset<fbid>":
        case "set<fbid>":
          i = o("AdsInterfacesRouteTypeFBID").encodeOrderedSet(n, r);
          break;
        case "fbidlist":
        case "list<fbid>":
          i = o("AdsInterfacesRouteTypeFBID").encodeList(n, r);
          break;
        case "floatarray":
        case "array<float>":
        case "numberarray":
        case "array<number>":
          i = o("AdsInterfacesRouteTypeFloat").encodeArray(n, r);
          break;
        case "floatorderedset":
        case "floatset":
        case "orderedset<float>":
        case "set<float>":
        case "numberorderedset":
        case "numberset":
        case "orderedset<number>":
        case "set<number>":
          i = o("AdsInterfacesRouteTypeFloat").encodeOrderedSet(n, r);
          break;
        case "floatlist":
        case "list<float>":
        case "numberlist":
        case "list<number>":
          i = o("AdsInterfacesRouteTypeFloat").encodeList(n, r);
          break;
        case "intarray":
        case "array<int>":
          i = o("AdsInterfacesRouteTypeInt").encodeArray(n, r);
          break;
        case "intorderedset":
        case "intset":
        case "orderedset<int>":
        case "set<int>":
          i = o("AdsInterfacesRouteTypeInt").encodeOrderedSet(n, r);
          break;
        case "intlist":
        case "list<int>":
          i = o("AdsInterfacesRouteTypeInt").encodeList(n, r);
          break;
      }
      return i;
    }
    l.default = u;
  },
  98,
);
