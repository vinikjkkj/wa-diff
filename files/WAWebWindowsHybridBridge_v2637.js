__d(
  "WAWebWindowsHybridBridge.v2637",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2637",
    "WAWebWindowsHybridBridgeAbProps.v2637",
    "WAWebWindowsHybridBridgeAdv.v2637",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2637",
    "WAWebWindowsHybridBridgeConnection.v2637",
    "WAWebWindowsHybridBridgeContacts.v2637",
    "WAWebWindowsHybridBridgeDebugFeatures.v2637",
    "WAWebWindowsHybridBridgeLinksPreview.v2637",
    "WAWebWindowsHybridBridgeMediaFiles.v2637",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2637",
    "WAWebWindowsHybridBridgeMetaConfig.v2637",
    "WAWebWindowsHybridBridgeNativeAppState.v2637",
    "WAWebWindowsHybridBridgeOds.v2637",
    "WAWebWindowsHybridBridgePictures.v2637",
    "WAWebWindowsHybridBridgePreferences.v2637",
    "WAWebWindowsHybridBridgeRateTheApp.v2637",
    "WAWebWindowsHybridBridgeRingtone.v2637",
    "WAWebWindowsHybridBridgeScalingControl.v2637",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2637",
    "WAWebWindowsHybridBridgeSharesheet.v2637",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2637",
    "WAWebWindowsHybridBridgeTouchpadFix.v2637",
    "WAWebWindowsHybridBridgeVoip.v2637",
    "WAWebWindowsHybridBridgeWam.v2637",
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
            "WAWebWindowsHybridBridgeAbProps.v2637",
          ).WindowsHybridBridgeAbProps_v2637)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2637",
          ).WindowsHybridBridgeWam_v2637)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2637",
          ).WindowsHybridBridgePreferences_v2637)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2637",
          ).WindowsHybridBridgeScalingControl_v2637)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2637",
          ).WindowsHybridBridgeOds_v2637)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2637",
          ).WindowsHybridBridgePictures_v2637)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2637",
            ).WindowsHybridBridgeDebugFeatures_v2637)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2637",
          ).VoipWinRTBridge_v2637)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2637",
          ).WAWebWindowsHybridBridgeRateTheApp_v2637)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2637",
          ).WindowsHybridBridgeConnection_v2637)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2637",
          ).WindowsHybridBridgeTouchpadFix_v2637)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2637",
          ).WindowsHybridBridgeLinksPreview_v2637)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2637",
            ).WindowsHybridBridgeContacts_v2637)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2637",
            ).WindowsHybridBridgeContacts_v2637)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2637",
          ).WAWebWindowsHybridBridgeMediaFiles_v2637)(h, e));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2637",
          ).WAWebWindowsHybridBridgeSharesheet_v2637)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2637",
          ).WindowsHybridAppActivationBridge_v2637)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2637",
          ).WindowsHybridBridgeNativeAppState_v2637)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2637",
          ).WindowsHybridBridgeSystemIntegrations_v2637)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2637",
          ).WindowsHybridBridgeBrowserExtensions_v2637)(R));
        var L = e.hostObjects.SeamlessMigrationBridge;
        L &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2637",
          ).WindowsHybridBridgeSeamlessMigration_v2637)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        (E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2637",
          ).WindowsHybridBridgeMediaTranscoder_v2637)(e, E)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2637",
          ).WindowsHybridBridgeAdv_v2637)(e.hostObjects.AdvBridge)));
        var k = e.hostObjects.RingtoneBridge;
        k != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2637",
          ).WindowsHybridBridgeRingtone_v2637)(k));
        var I = e.hostObjects.MetaConfigBridge;
        (I != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2637",
          ).WindowsHybridBridgeMetaConfig_v2637)(I)),
          this.metaConfig.initialize()),
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
    l.WindowsHybridBridge_v2637 = e;
  },
  98,
);
