__d(
  "WAWebPageLoadLogging",
  [],
  function (t, n, r, o, a, i) {
    var e = "0",
      l = {
        PAGE_LOAD_ID: e,
        endPageLoadQpl: function () {},
        endPageLoadQplMeasure: function () {},
        startPageLoadQplMeasure: function () {},
        addPageLoadQplPoint: function () {},
        addPageLoadQplAnnotation: function () {},
        addPageLoadQplAnnotationNow: function () {},
        incrementPageLoadQplSocketError: function () {},
        addPageLoadValidationData: function () {},
        setWamCompleteForValidation: function () {},
      };
    function s(e) {
      l = e;
    }
    var u = !1;
    function c(e, t, n) {
      return ((u = !0), l.endPageLoadQpl(e, t, n));
    }
    function d(e) {
      return l.startPageLoadQplMeasure(e);
    }
    function m(e) {
      return l.endPageLoadQplMeasure(e);
    }
    function p(e, t) {
      return l.addPageLoadQplPoint(e, t);
    }
    function _(e) {
      return l.addPageLoadQplAnnotation(e);
    }
    function f(e) {
      return l.addPageLoadQplAnnotationNow(e);
    }
    function g(e, t) {
      return l.addPageLoadValidationData(e, t);
    }
    function h() {
      return l.incrementPageLoadQplSocketError();
    }
    function y() {
      return l.setWamCompleteForValidation();
    }
    function C() {
      return l.PAGE_LOAD_ID;
    }
    function b() {
      return l.PAGE_LOAD_ID === e ? null : l.PAGE_LOAD_ID;
    }
    function v() {
      return u;
    }
    ((i.setImpl = s),
      (i.endPageLoadQpl = c),
      (i.startPageLoadQplMeasure = d),
      (i.endPageLoadQplMeasure = m),
      (i.addPageLoadQplPoint = p),
      (i.addPageLoadQplAnnotation = _),
      (i.addPageLoadQplAnnotationNow = f),
      (i.addPageLoadValidationData = g),
      (i.incrementPageLoadQplSocketError = h),
      (i.setWamCompleteForValidation = y),
      (i.getPageLoadId = C),
      (i.getLoggedPageLoadId = b),
      (i.wasPageLoadQplLogged = v));
  },
  66,
);
