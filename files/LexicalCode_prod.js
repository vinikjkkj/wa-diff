__d(
  "LexicalCode.prod",
  ["LexicalCodeCore", "LexicalCodePrism"],
  function $module_LexicalCode_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    "use strict";
    var _require_LexicalCodeCore;
    function t(e) {
      var o = Object.create(null);
      if (e) for (var t in e) o[t] = e[t];
      return ((o["default"] = e), o);
    }
    var d = t(require("LexicalCodePrism"));
    var i = d.CODE_LANGUAGE_FRIENDLY_NAME_MAP,
      n = d.CODE_LANGUAGE_MAP,
      g = d.getCodeLanguageOptions,
      r = d.getCodeLanguages,
      s = d.getCodeThemeOptions,
      a = d.getLanguageFriendlyName,
      C = d.normalizeCodeLanguage,
      L = d.normalizeCodeLanguage,
      p = d.PrismTokenizer,
      x = d.registerCodeHighlighting;
    ((exports.$createCodeHighlightNode =
      (_require_LexicalCodeCore = require("LexicalCodeCore")).$createCodeHighlightNode),
      (exports.$createCodeNode = _require_LexicalCodeCore.$createCodeNode),
      (exports.$getCodeLineDirection =
        _require_LexicalCodeCore.$getCodeLineDirection),
      (exports.$getEndOfCodeInLine =
        _require_LexicalCodeCore.$getEndOfCodeInLine),
      (exports.$getFirstCodeNodeOfLine =
        _require_LexicalCodeCore.$getFirstCodeNodeOfLine),
      (exports.$getLastCodeNodeOfLine =
        _require_LexicalCodeCore.$getLastCodeNodeOfLine),
      (exports.$getStartOfCodeInLine =
        _require_LexicalCodeCore.$getStartOfCodeInLine),
      (exports.$isCodeHighlightNode =
        _require_LexicalCodeCore.$isCodeHighlightNode),
      (exports.$isCodeNode = _require_LexicalCodeCore.$isCodeNode),
      (exports.$outdentLeadingSpaces =
        _require_LexicalCodeCore.$outdentLeadingSpaces),
      (exports.CodeExtension = _require_LexicalCodeCore.CodeExtension),
      (exports.CodeHighlightNode = _require_LexicalCodeCore.CodeHighlightNode),
      (exports.CodeIndentExtension =
        _require_LexicalCodeCore.CodeIndentExtension),
      (exports.CodeNode = _require_LexicalCodeCore.CodeNode),
      (exports.DEFAULT_CODE_LANGUAGE =
        _require_LexicalCodeCore.DEFAULT_CODE_LANGUAGE),
      (exports.getDefaultCodeLanguage =
        _require_LexicalCodeCore.getDefaultCodeLanguage),
      (exports.CODE_LANGUAGE_FRIENDLY_NAME_MAP = i),
      (exports.CODE_LANGUAGE_MAP = n),
      (exports.PrismTokenizer = p),
      (exports.getCodeLanguageOptions = g),
      (exports.getCodeLanguages = r),
      (exports.getCodeThemeOptions = s),
      (exports.getLanguageFriendlyName = a),
      (exports.normalizeCodeLang = C),
      (exports.normalizeCodeLanguage = L),
      (exports.registerCodeHighlighting = x));
  },
  null,
);
