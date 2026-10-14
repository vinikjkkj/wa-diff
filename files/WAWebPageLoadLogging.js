__d(
  "WAWebPageLoadLogging",
  [],
  function (t, n, r, o, a, i) {
    var e = {
      PAGE_LOAD_ID: "0",
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
    function l(t) {
      e = t;
    }
    var s = !1;
    function u(t, n, r) {
      return ((s = !0), e.endPageLoadQpl(t, n, r));
    }
    function c(t) {
      return e.startPageLoadQplMeasure(t);
    }
    function d(t) {
      return e.endPageLoadQplMeasure(t);
    }
    function m(t) {
      return e.addPageLoadQplPoint(t);
    }
    function p(t) {
      return e.addPageLoadQplAnnotation(t);
    }
    function _(t) {
      return e.addPageLoadQplAnnotationNow(t);
    }
    function f(t, n) {
      return e.addPageLoadValidationData(t, n);
    }
    function g() {
      return e.incrementPageLoadQplSocketError();
    }
    function h() {
      return e.setWamCompleteForValidation();
    }
    function y() {
      return e.PAGE_LOAD_ID;
    }
    function C() {
      return s;
    }
    ((i.setImpl = l),
      (i.endPageLoadQpl = u),
      (i.startPageLoadQplMeasure = c),
      (i.endPageLoadQplMeasure = d),
      (i.addPageLoadQplPoint = m),
      (i.addPageLoadQplAnnotation = p),
      (i.addPageLoadQplAnnotationNow = _),
      (i.addPageLoadValidationData = f),
      (i.incrementPageLoadQplSocketError = g),
      (i.setWamCompleteForValidation = h),
      (i.getPageLoadId = y),
      (i.wasPageLoadQplLogged = C));
  },
  66,
);
