__d(
  "WebBloksErrors",
  [],
  function (t, n, r, o, a, i) {
    var e = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o = e.call(this) || this),
            (o.message =
              (r === !0 ? "[DEV Only]" : "") +
              "[WebBloks] " +
              t +
              (n ? ": " + n.toString() : "")),
            (o.name = o.constructor.name),
            n && ((o.cause = n), n.stack && (o.stack = n.stack)),
            o.stack ||
              ((typeof process == "undefined" ||
                process.env.JEST_WORKER_ID === void 0) &&
                (o.stack = new Error(o.message).stack)),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      l = (function (e) {
        function t(t, n) {
          return (
            e.call(this, "Unable to find component with id=" + t, null, n) ||
            this
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      s = (function (e) {
        function t(t, n, r) {
          return e.call(this, "Error while fetching data: " + t, n, r) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      u = (function (e) {
        function t(t, n, r) {
          var o, a;
          return (
            (a = e.call(this, "Script error: " + t, null, r) || this),
            (a.stackFrame =
              n == null || (o = n.getSourceMapNode()) == null
                ? void 0
                : o.getBloksStackFrame()),
            (a.stackFrame = c(a.stackFrame)),
            a
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e);
    function c(e) {
      for (var t = e; t != null; ) {
        var n;
        if (t.offset === ((n = t.nextFrame) == null ? void 0 : n.offset)) {
          var r;
          t.nextFrame = (r = t.nextFrame) == null ? void 0 : r.nextFrame;
        } else t = t.nextFrame;
      }
      return e;
    }
    var d = (function (e) {
        function t(t, n, r) {
          return (
            e.call(
              this,
              "Script parse error at position " + t + ": " + n,
              null,
              r,
            ) || this
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      m = (function (e) {
        function t(t, n) {
          return (
            e.call(
              this,
              'Action for "' + t + '" was not registered.',
              null,
              n,
            ) || this
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      p = (function (e) {
        function t(t, n) {
          return (
            e.call(
              this,
              'Component for "' + t + '" was not registered.',
              null,
              n,
            ) || this
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      _ = (function (e) {
        function t(t, n) {
          return e.call(this, "Unsupported feature: " + t, null, n) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      f = (function (e) {
        function t(t, n) {
          return (
            e.call(
              this,
              'Container config for "' + t + '" was not registered.',
              null,
              n,
            ) || this
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e);
    ((i.WebBloksError = e),
      (i.WebBloksComponentIdNotFoundError = l),
      (i.WebBloksNetworkError = s),
      (i.WebBloksScriptError = u),
      (i.WebBloksScriptParseError = d),
      (i.WebBloksUnknownActionError = m),
      (i.WebBloksUnknownComponentError = p),
      (i.WebBloksUnsupportedFeatureError = _),
      (i.WebBloksUnknownContainerConfigError = f));
  },
  66,
);
