__d(
  "createSpacingSelector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.containerInternalComponentSpacingStyles,
        n = e.containerInternalPageSpacingStyles;
      return function (r, o) {
        switch (r) {
          case "page":
            return o.map(function (e) {
              return n[e];
            });
          case "component":
            return o.map(function (e) {
              return t[e];
            });
        }
      };
    }
    function l(e) {
      var t = e.containerExternalRelatedSpacingStyles,
        n = e.containerExternalSectionSpacingStyles,
        r = e.containerExternalUnrelatedSpacingStyles;
      return function (o, a) {
        switch (o) {
          case "related":
            return a.map(function (e) {
              return t[e];
            });
          case "unrelated":
            return a.map(function (e) {
              return r[e];
            });
          case "section":
            return a.map(function (e) {
              return n[e];
            });
        }
        return null;
      };
    }
    function s(e) {
      var t = e.componentFineSpacingOffsetStyles,
        n = e.componentFineSpacingStyles;
      return function (r, o) {
        var e = r.map(function (e) {
            return n[e];
          }),
          a = o.map(function (e) {
            return t[e];
          });
        return [].concat(e, a);
      };
    }
    function u(e) {
      var t = e.componentNormalSpacingOffsetStyles,
        n = e.componentNormalSpacingStyles;
      return function (r, o) {
        var e = r.map(function (e) {
            return n[e];
          }),
          a = o.map(function (e) {
            return t[e];
          });
        return [].concat(e, a);
      };
    }
    function c(e) {
      var t = e.componentCoarseSpacingOffsetStyles,
        n = e.componentCoarseSpacingStyles;
      return function (r, o) {
        var e = r.map(function (e) {
            return n[e];
          }),
          a = o.map(function (e) {
            return t[e];
          });
        return [].concat(e, a);
      };
    }
    function d(e) {
      var t = e.componentExternalRelatedSpacingStyles,
        n = e.componentExternalUnrelatedSpacingStyles;
      return function (r, o) {
        switch (r) {
          case "related":
            return o.map(function (e) {
              return t[e];
            });
          case "unrelated":
            return o.map(function (e) {
              return n[e];
            });
        }
        return null;
      };
    }
    function m(e) {
      var t = e.contentExternalHeadingSpacingStyles,
        n = e.contentExternalParagraphSpacingStyles,
        r = e.contentExternalSectionSpacingStyles;
      return function (o, a) {
        switch (o) {
          case "heading":
            return a.map(function (e) {
              return t[e];
            });
          case "paragraph":
            return a.map(function (e) {
              return n[e];
            });
          case "section":
            return a.map(function (e) {
              return r[e];
            });
        }
        return null;
      };
    }
    function p(e) {
      var t = e.controlCoarseSpacingStyles,
        n = e.controlFineSpacingStyles,
        r = e.controlNormalSpacingStyles;
      return {
        selectControlNormalSpacing: function (t) {
          return t.map(function (e) {
            return r[e];
          });
        },
        selectControlFineSpacing: function (t) {
          return t.map(function (e) {
            return n[e];
          });
        },
        selectControlCoarseSpacing: function (n) {
          return n.map(function (e) {
            return t[e];
          });
        },
      };
    }
    function _(e) {
      var t = e.inputSpacingStyles;
      return function (n) {
        return n.map(function (e) {
          return t[e];
        });
      };
    }
    function f(e) {
      var t = e.layoutContainerExternalRelatedSpacingStyles,
        n = e.layoutContainerExternalSectionSpacingStyles,
        r = e.layoutContainerExternalUnrelatedSpacingStyles;
      return function (o, a) {
        switch (o) {
          case "related":
            return a.map(function (e) {
              return t[e];
            });
          case "unrelated":
            return a.map(function (e) {
              return r[e];
            });
          case "section":
            return a.map(function (e) {
              return n[e];
            });
        }
        return null;
      };
    }
    function g(e) {
      var t = e.layoutComponentExternalRelatedSpacingStyles,
        n = e.layoutComponentExternalUnrelatedSpacingStyles;
      return function (r, o) {
        switch (r) {
          case "related":
            return o.map(function (e) {
              return t[e];
            });
          case "unrelated":
            return o.map(function (e) {
              return n[e];
            });
        }
        return null;
      };
    }
    function h(e) {
      var t = e.layoutContentExternalHeadingSpacingStyles,
        n = e.layoutContentExternalParagraphSpacingStyles,
        r = e.layoutContentExternalSectionSpacingStyles;
      return function (o, a) {
        switch (o) {
          case "heading":
            return a.map(function (e) {
              return t[e];
            });
          case "paragraph":
            return a.map(function (e) {
              return n[e];
            });
          case "section":
            return a.map(function (e) {
              return r[e];
            });
        }
        return null;
      };
    }
    function y(t) {
      var n = t.styles,
        r = n.spacing,
        o = e(r),
        a = l(r),
        i = s(r),
        f = u(r),
        g = c(r),
        h = d(r),
        y = m(r),
        C = p(r),
        b = C.selectControlCoarseSpacing,
        v = C.selectControlFineSpacing,
        S = C.selectControlNormalSpacing,
        R = _(r);
      return function (t) {
        var e = t.bounds,
          n = t.context,
          r = t.relation,
          l = t.positions,
          s = l === void 0 ? ["vertical", "horizontal"] : l,
          u = t.offsets,
          c = u === void 0 ? [] : u,
          d = t.target;
        switch (n) {
          case "container":
            switch (e) {
              case "internal":
                if (r === "page" || r === "component") return o(r, s);
                break;
              case "external":
                if (r === "related" || r === "unrelated" || r === "section")
                  return a(r, s);
                break;
            }
            break;
          case "component":
            switch (e) {
              case "internal":
                switch (d) {
                  case "fine":
                    return i(s, c);
                  case "coarse":
                    return g(s, c);
                  default:
                    return f(s, c);
                }
              case "external":
                if (r === "related" || r === "unrelated") return h(r, s);
                break;
            }
            break;
          case "content":
            if (r === "heading" || r === "paragraph" || r === "section")
              return y(r, s);
            break;
          case "control":
            if (e === "internal")
              switch (d) {
                case "fine":
                  return v(s);
                case "coarse":
                  return b(s);
                default:
                  return S(s);
              }
            break;
          case "input":
            if (e === "internal") return R(s);
            break;
        }
        return null;
      };
    }
    function C(e) {
      var t = e.styles,
        n = t.spacing,
        r = f(n),
        o = g(n),
        a = h(n);
      return function (t) {
        var e = t.context,
          n = t.direction,
          i = t.relation,
          l = [];
        switch (n) {
          case "vertical-reverse":
            l.push("bottom");
            break;
          case "vertical":
            l.push("top");
            break;
          case "horizontal-reverse":
            l.push("start");
            break;
          case "horizontal":
          default:
            l.push("end");
            break;
        }
        switch (e) {
          case "container":
            if (i === "related" || i === "unrelated" || i === "section")
              return r(i, l);
            break;
          case "component":
            if (i === "related" || i === "unrelated") return o(i, l);
            break;
          case "content":
            if (i === "heading" || i === "paragraph" || i === "section")
              return a(i, l);
            break;
        }
        return null;
      };
    }
    ((i.createSpacingSelector = y), (i.createLayoutSpacingSelector = C));
  },
  66,
);
