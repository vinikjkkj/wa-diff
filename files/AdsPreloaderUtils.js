__d(
  "AdsPreloaderUtils",
  [
    "AdsPreloaderMismatchesConstants",
    "FBLogger",
    "compareString",
    "filterObject",
    "getErrorSafe",
    "preloadedGraphAPIUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ids"],
      s = ["ids"],
      u = [
        "locale",
        "am_call_tags",
        "xref",
        "ads_manager_read_regions",
        "ads_manager_write_regions",
        "qpl_active_flow_ids",
        "qpl_active_flow_instance_ids",
        "qpl_active_e2e_trace_ids",
      ];
    function c(e) {
      if (e) {
        var t = e.filtering;
        (Array.isArray(t) &&
          (t.sort(function (e, t) {
            return r("compareString")(e.field, t.field);
          }),
          t.forEach(function (e) {
            Array.isArray(e.value) && (e.value = e.value.slice().sort());
          })),
          Array.isArray(e.action_attribution_windows) &&
            e.action_attribution_windows.sort());
      }
      return e;
    }
    function d(e) {
      var t = e.preloadInfo;
      return t && t.fieldsParam ? t.fieldsParam : "fields";
    }
    function m(e, t, n) {
      var r,
        a,
        i,
        l = {
          fields: [],
          client_values: [],
          server_values: [],
          missing_server_fields: [],
        };
      function s(e) {
        return typeof e == "string" ? e : JSON.stringify(e != null ? e : null);
      }
      function u(e, t, n) {
        (l.fields.push(e),
          l.client_values.push(s(t)),
          l.server_values.push(s(n)));
      }
      var m = h(e),
        p = d(e),
        _ = f(n);
      (m.path !== _.path && u("path", m.path, _.path),
        m.method !== _.method && u("method", m.method, _.method),
        t[n].error && u("error", null, "non-null"));
      var y = o("preloadedGraphAPIUtils").getSubsetDeltas(
        c(m.params),
        g(c(_.params)),
        p,
        (r = e.preloadInfo) == null ? void 0 : r.fieldComparators,
      );
      for (var C of y)
        if (C.field === p && m.params != null && _.params != null) {
          var b = o("preloadedGraphAPIUtils").getFieldSubsetDeltas(
            m.params[p],
            _.params[p],
          );
          l.missing_server_fields = b;
        } else u(C.field, C.clientValue, C.serverValue);
      var v = (a = m.ids) != null ? a : [],
        S = (i = _.ids) != null ? i : [];
      return (
        v.every(function (e) {
          return S.indexOf(e) !== -1;
        }) || u("ids", v, S),
        l
      );
    }
    function p(e) {
      var t = e.method,
        n = e.params,
        r = e.path;
      return _(n, t, r);
    }
    function _(e, t, n) {
      var r = g(e);
      for (var o of Object.keys(r)) r[o] == null && delete r[o];
      return t + n + JSON.stringify(r);
    }
    function f(t) {
      var n = t.indexOf("/"),
        o = t.indexOf("{"),
        a = t.substring(0, n),
        i = t.substring(n, o),
        l = t.substring(o);
      try {
        var s = JSON.parse(l),
          u = s.ids,
          c = babelHelpers.objectWithoutPropertiesLoose(s, e);
        return y({ ids: u, params: c, path: i, method: a });
      } catch (e) {
        var d = r("getErrorSafe")(e);
        throw (
          r("FBLogger")("ads")
            .catching(d)
            .warn(
              "Error parsing paramString in preload response for serverKey: %s",
              t,
            ),
          d
        );
      }
    }
    function g(e) {
      return e == null
        ? {}
        : r("filterObject")(e, function (e, t) {
            return !u.includes(t) && !t.startsWith("_");
          });
    }
    function h(e) {
      var t = e.path,
        n = e.method,
        r = g(e.params),
        o = r.ids,
        a = babelHelpers.objectWithoutPropertiesLoose(r, s);
      return y({ ids: o, params: a, path: t, method: n });
    }
    function y(e) {
      var t = e.ids,
        n = e.path,
        r = e.method,
        o = e.params,
        a = n.replace(/(\/v\d\.\d\/)\d*\/?$/, "$1"),
        i = !1;
      if (t == null && a !== n) {
        i = !0;
        var l = n.replace(/\/v\d\.\d\/(\d*)\/?$/, "$1");
        ((t = l), (n = a));
      }
      if (
        (typeof t == "string" && (t = t.split(",")),
        o && o.fields && o.fields.sort && o.fields.sort(),
        o != null)
      )
        for (var s of Object.keys(o)) o[s] == null && delete o[s];
      return { ids: t, isForSingleID: i, params: o, path: n, method: r };
    }
    function C(e, t) {
      if (Object.keys(t).length === 0)
        return {
          fields: [o("AdsPreloaderMismatchesConstants").NO_QUERIES_MSG],
          client_values: ["N/A"],
          server_values: ["true"],
        };
      var n = null;
      for (var a of Object.keys(t)) {
        var i = m(e, t, a);
        (n === null || i.fields.length < n.fields.length) && (n = i);
      }
      return r("filterObject")(n != null ? n : {}, function (e, t) {
        return e.length > 0;
      });
    }
    ((l.normalizeParamsForComparison = c),
      (l.getFieldsParamFromRequest = d),
      (l.getQueryKey = p),
      (l.getQueryKeyImpl = _),
      (l.extractMetadataFromServerKey = f),
      (l.filterIgnoredParams = g),
      (l.extractMetadataFromRequest = h),
      (l.getStringArrayAnnotations = C));
  },
  98,
);
