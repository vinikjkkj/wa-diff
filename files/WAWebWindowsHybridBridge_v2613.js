__d(
  "WAWebWindowsHybridBridge.v2613",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2613",
    "WAWebWindowsHybridBridgeAbProps.v2613",
    "WAWebWindowsHybridBridgeAdv.v2613",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2613",
    "WAWebWindowsHybridBridgeConnection.v2613",
    "WAWebWindowsHybridBridgeContacts.v2613",
    "WAWebWindowsHybridBridgeDebugFeatures.v2613",
    "WAWebWindowsHybridBridgeLinksPreview.v2613",
    "WAWebWindowsHybridBridgeMediaFiles.v2613",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2613",
    "WAWebWindowsHybridBridgeNativeAppState.v2613",
    "WAWebWindowsHybridBridgePictures.v2613",
    "WAWebWindowsHybridBridgePreferences.v2613",
    "WAWebWindowsHybridBridgeRateTheApp.v2613",
    "WAWebWindowsHybridBridgeScalingControl.v2613",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2613",
    "WAWebWindowsHybridBridgeSharesheet.v2613",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2613",
    "WAWebWindowsHybridBridgeTouchpadFix.v2613",
    "WAWebWindowsHybridBridgeVoip.v2613",
    "WAWebWindowsHybridBridgeWam.v2613",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2613",
          ).WindowsHybridBridgeAbProps_v2613)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2613",
          ).WindowsHybridBridgeWam_v2613)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2613",
          ).WindowsHybridBridgePreferences_v2613)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2613",
          ).WindowsHybridBridgeScalingControl_v2613)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2613",
          ).WindowsHybridBridgePictures_v2613)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2613",
            ).WindowsHybridBridgeDebugFeatures_v2613)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2613",
          ).VoipWinRTBridge_v2613)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2613",
          ).WAWebWindowsHybridBridgeRateTheApp_v2613)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2613",
          ).WindowsHybridBridgeConnection_v2613)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2613",
          ).WindowsHybridBridgeTouchpadFix_v2613)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2613",
          ).WindowsHybridBridgeLinksPreview_v2613)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2613",
            ).WindowsHybridBridgeContacts_v2613)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2613",
            ).WindowsHybridBridgeContacts_v2613)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2613",
          ).WAWebWindowsHybridBridgeMediaFiles_v2613)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2613",
          ).WAWebWindowsHybridBridgeSharesheet_v2613)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2613",
          ).WindowsHybridAppActivationBridge_v2613)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2613",
          ).WindowsHybridBridgeNativeAppState_v2613)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2613",
          ).WindowsHybridBridgeSystemIntegrations_v2613)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2613",
          ).WindowsHybridBridgeBrowserExtensions_v2613)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2613",
          ).WindowsHybridBridgeSeamlessMigration_v2613)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2613",
          ).WindowsHybridBridgeMediaTranscoder_v2613)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2613",
          ).WindowsHybridBridgeAdv_v2613)(e.hostObjects.AdvBridge)),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge_v2613 = e;
  },
  98,
);
