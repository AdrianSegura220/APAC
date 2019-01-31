var _library = 'adrealestate';

prx.library_scales = prx.library_scales || {};
prx.library_scales.adrealestate = 1;

//TYPE: BANNER AD
prx.types.bannerad = {
	name: 'bannerad'
	,onDisplay: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;

		var _props = prx.componentsHelper.getProp(item.textProperties,'props-text');
        	_props += prx.componentsHelper.getProp(item.textFontStyle,'props-text-style');

		if(item.name == 'bannerad') {
			var _dims = prx.componentsHelper.getRealDims(item, symbol);
			item.text = _dims.width + 'x' + _dims.height;
		}

		var cR = '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-bannerad">';

		cR += '<style>';
		cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
		cR += '#'+_id+' .bannerad-inner { border: '+prx.componentsHelper.getProp(item.borderWidth,'num-border-width')+'px solid '+prx.componentsHelper.getProp(item.borderColor,'color-border')+'; border-radius: '+prx.componentsHelper.getProp(item.borderRadius,'border-radius')+'; '+prx.utils.getBgCss(item.backgroundColor)+'; '+prx.componentsHelper.getProp(item.textFont + '|' + item.textFontStyle,'font-family')+' font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; '+_props+' }';
		if(item.imgSrc.fileId != '') {
			cR += '#'+_id+' .bannerad-inner { background-image: url('+prx.componentsHelper.getProp(item.imgSrc,'asset')+'); }';
		}
		cR += '</style>';
		cR += prx.items.getComponentPrependDivs(item, containerid, symbol);
		cR += '<div class="bannerad-outer">';
		cR += '<div class="bannerad-inner liveUpdate-backgroundColor-background-color liveUpdate-borderColor-border-color liveUpdate-textColor-color changeProperty-backgroundColor changeProperty-textColor changeProperty-textFont changeProperty-textSize changeProperty-borderColor changeProperty-borderWidth changeProperty-borderRadius">';
		cR += '<span data-editableProperty="text">' + prx.componentsHelper.getProp(item.text,'text-textarea') + '</span>';
		cR += '</div>';
		cR += '</div>';
		cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
		cR += '</div>';

		return cR;
	}
	,onResize: function(item,containerid,symbol) {
		var _id = (!containerid) ? item.id : containerid+'-'+item.id;
		var _dims = prx.componentsHelper.getRealDims(item, symbol);
		
		$('#'+ _id + ' .bannerad-inner').text(_dims.width + 'x' + _dims.height);
		item.text = _dims.width + 'x' + _dims.height;
	}
	,interactions: [ prx.commonproperties.actions ]
	,editableProperties: [
		{
	    	caption: 'Text'
	    	,name: 'text'
	    	,type: 'textarea'
	    	,value: function(item,name) {
	    		return item.text;
	    	}
			,changeProperty: {
				property: 'text',
				selector: '.bannerad-inner',
				transitionable: false
			}
	    }
	]
	,propertyGroups: [
	    {
	    	caption: 'Style',
	    	properties: [
		    	[ 
		    		prx.commonproperties.backgroundColor
		    	],
		    	[
				    prx.commonproperties.borderWidth
		    		,prx.commonproperties.borderColor
		    		,prx.commonproperties.borderRadius
		    	]
	    	]
	    },
	    {
	    	caption: 'Text',
	    	properties: [
			  [
					prx.commonproperties.textFont
			  ],
			  [
					prx.commonproperties.textFontStyle,
					prx.commonproperties.textSize

			  ]
             ,[
                     prx.commonproperties.textProperties
                    ,prx.commonproperties.textColor()
              ]

	    	]
	    },
	    {
	    	caption: 'Optional Image',
	    	properties: [[
			    {
						caption: false
						,name: 'imgSrc'
						,type: 'combo-asset'
						,displayValue: function(item,name) {
							if(item.imgSrc.fileId == '') {
								return 'No asset selected.';
							}
							return item.imgSrc.name;
						}
						,value: function(item,name) {
							return JSON.stringify({
								allow: 'image',
								asset: item.imgSrc
							});
						}
						,changeProperty: {
							caption: 'Image',
							rerender: true
						}
			    }
			  ]]
		}
	]
}


var bannerBasicProps = {
	type: 'bannerad'
	,lib: _library
	,resizable: false
	,properties: "v,l,o,hpos,vpos,dr,f,ds"
	,borderWidth: 2*prx.componentsHelper.getScale(_library)
	,borderColor: '#4C4C4C'
	,borderRadius: 0*prx.componentsHelper.getScale(_library)
	,backgroundColor:  '#40C8F4'
	,textFont: 'Arial,sans-serif'
	,textFontStyle: '700'
	,textSize: 16*prx.componentsHelper.getScale(_library)
	,textColor:  '#ffffff'
	,textProperties: []
	,imgSrc: { fileId: '', assetType: '', name: '' }
};


prx.components.bannerad = {
	name: 'bannerad'
	,caption: 'Custom Banner'
    ,icon: '-1200px -800px'
	,helper: prx.url.devices+'/'+_library+'/bannerad/helper.png'
	,width: 200*prx.componentsHelper.getScale(_library)
	,height: 200*prx.componentsHelper.getScale(_library)
	,text: '200x200'
};
$.extend(prx.components.bannerad, bannerBasicProps);

prx.components.bannerad.resizable = true;
prx.components.bannerad.properties = "v,l,o,hpos,vpos,w,h";

// GOOGLE SIZES

prx.components.bannerad_g_320x50 = {
	name: 'bannerad_g_320x50'
	,caption: 'Leaderboard 320x50'
	,tags: 'Mobile Leaderboard 320x50'
    ,icon: '-300px -900px'
	,helper: prx.url.devices+'/'+_library+'/bannerad_320x50/helper.png'
	,width: 320*prx.componentsHelper.getScale(_library)
	,height: 50*prx.componentsHelper.getScale(_library)
	,text: '320x50'
};
$.extend(prx.components.bannerad_g_320x50, bannerBasicProps);


prx.components.bannerad_g_320x50_retina = {
	name: 'bannerad_g_320x50_retina'
	,caption: 'Leaderboard @2X 320x50'
	,tags: 'Mobile Leaderboard @2X 320x50'
    ,icon: '-400px -900px'
	,helper: prx.url.devices+'/'+_library+'/bannerad_320x50_retina/helper.png'
	,width: 640*prx.componentsHelper.getScale(_library)
	,height: 100*prx.componentsHelper.getScale(_library)
	,text: '320x50 (@2X)'
	,borderWidth: 4
	,textSize: 32*prx.componentsHelper.getScale(_library)
};
$.extend(prx.components.bannerad_g_320x50_retina, bannerBasicProps);


prx.components.bannerad_g_468x60 = {
	name: 'bannerad_g_468x60'
	,caption: 'Banner 468x60'
    ,icon: '-500px -900px'
	,helper: prx.url.devices+'/'+_library+'/bannerad_468x60/helper.png'
	,width: 468*prx.componentsHelper.getScale(_library)
	,height: 60*prx.componentsHelper.getScale(_library)
	,text: '468x60'
};
$.extend(prx.components.bannerad_g_468x60, bannerBasicProps);


prx.components.bannerad_g_728x90 = {
	name: 'bannerad_g_728x90'
	,caption: 'Leaderboard 728x90'
    ,icon: '-600px -900px'
	,helper: prx.url.devices+'/'+_library+'/bannerad_728x90/helper.png'
	,width: 728*prx.componentsHelper.getScale(_library)
	,height: 90*prx.componentsHelper.getScale(_library)
	,text: '728x90'
};
$.extend(prx.components.bannerad_g_728x90, bannerBasicProps);


prx.components.bannerad_g_250x250 = {
	name: 'bannerad_g_250x250'
	,caption: 'Square 250x250'
    ,icon: '-700px -900px'
	,helper: prx.url.devices+'/'+_library+'/bannerad_250x250/helper.png'
	,width: 250*prx.componentsHelper.getScale(_library)
	,height: 250*prx.componentsHelper.getScale(_library)
	,text: '250x250'
};
$.extend(prx.components.bannerad_g_250x250, bannerBasicProps);


prx.components.bannerad_g_200x200 = {
	name: 'bannerad_g_200x200'
	,caption: 'Small Square 200x200'
    ,icon: '-800px -900px'
	,helper: prx.url.devices+'/'+_library+'/bannerad_200x200/helper.png'
	,width: 200*prx.componentsHelper.getScale(_library)
	,height: 200*prx.componentsHelper.getScale(_library)
	,text: '200x200'
};
$.extend(prx.components.bannerad_g_200x200, bannerBasicProps);


prx.components.bannerad_g_336x280 = {
	name: 'bannerad_g_336x280'
	,caption: 'Rectangle 336x280'
	,tags: 'Large Rectangle 336x280'
    ,icon: '-900px -900px'
	,helper: prx.url.devices+'/'+_library+'/bannerad_336x280/helper.png'
	,width: 336*prx.componentsHelper.getScale(_library)
	,height: 280*prx.componentsHelper.getScale(_library)
	,text: '336x280'
};
$.extend(prx.components.bannerad_g_336x280, bannerBasicProps);


prx.components.bannerad_g_300x250 = {
	name: 'bannerad_g_300x250'
	,caption: 'Rectangle 300x250'
	,tags: 'Inline Rectangle 300x250'
    ,icon: '-1000px -900px'
	,helper: prx.url.devices+'/'+_library+'/bannerad_300x250/helper.png'
	,width: 300*prx.componentsHelper.getScale(_library)
	,height: 250*prx.componentsHelper.getScale(_library)
	,text: '300x250'
};
$.extend(prx.components.bannerad_g_300x250, bannerBasicProps);


prx.components.bannerad_g_120x600 = {
	name: 'bannerad_g_120x600'
	,caption: 'Skyscraper 120x600'
    ,icon: '-1100px -900px'
	,helper: prx.url.devices+'/'+_library+'/bannerad_120x600/helper.png'
	,width: 120*prx.componentsHelper.getScale(_library)
	,height: 600*prx.componentsHelper.getScale(_library)
	,text: '120x600'
};
$.extend(prx.components.bannerad_g_120x600, bannerBasicProps);


prx.components.bannerad_g_160x600 = {
	name: 'bannerad_g_160x600'
	,caption: 'Skyscraper 160x600'
	,tags: 'Wide Skyscraper 160x600'
    ,icon: '-1200px -900px'
	,helper: prx.url.devices+'/'+_library+'/bannerad_160x600/helper.png'
	,width: 160*prx.componentsHelper.getScale(_library)
	,height: 600*prx.componentsHelper.getScale(_library)
	,text: '160x600'
};
$.extend(prx.components.bannerad_g_160x600, bannerBasicProps);


prx.components.bannerad_g_300x600 = {
	name: 'bannerad_g_300x600'
	,caption: 'Half-page ad 300x600'
	,icon: '-1300px -900px'
	,helper: prx.url.devices+'/'+_library+'/bannerad_300x600/helper.png'
	,width: 300*prx.componentsHelper.getScale(_library)
	,height: 600*prx.componentsHelper.getScale(_library)
	,text: '300x600'
};
$.extend(prx.components.bannerad_g_300x600, bannerBasicProps);


// IAB SIZES

prx.components.bannerad_iab_300x250 = prx.componentsHelper.cloneobject(prx.components.bannerad_g_300x250);
prx.components.bannerad_iab_300x250.name = 'bannerad_iab_300x250';
prx.components.bannerad_iab_300x250.caption = 'Rectangle 300x250';
prx.components.bannerad_iab_300x250.tags = 'Medium Rectangle 300x250';
prx.components.bannerad_iab_300x250.icon = '-1300px -800px';


prx.components.bannerad_iab_180x150 = {
    name: 'bannerad_iab_180x150'
    ,caption: 'Rectangle 180x150'
    ,icon: '-1400px -800px'
    ,helper: prx.url.devices+'/'+_library+'/bannerad_180x150/helper.png'
    ,width: 180*prx.componentsHelper.getScale(_library)
    ,height: 150*prx.componentsHelper.getScale(_library)
    ,text: '180x150'
};
$.extend(prx.components.bannerad_iab_180x150, bannerBasicProps);


prx.components.bannerad_iab_160x600 = prx.componentsHelper.cloneobject(prx.components.bannerad_g_160x600);
prx.components.bannerad_iab_160x600.name = 'bannerad_iab_160x600';
prx.components.bannerad_iab_160x600.icon = '-1500px -800px';


prx.components.bannerad_iab_728x90 = prx.componentsHelper.cloneobject(prx.components.bannerad_g_728x90);
prx.components.bannerad_iab_728x90.name = 'bannerad_iab_728x90';
prx.components.bannerad_iab_728x90.icon = '-1600px -800px';


prx.components.bannerad_iab_970x90 = {
    name: 'bannerad_iab_970x90'
	,caption: 'Leaderboard 970x90'
	,tags: 'Super Leaderboard 970x90'
    ,icon: '-1700px -800px'
    ,helper: prx.url.devices+'/'+_library+'/bannerad_970x90/helper.png'
    ,width: 970*prx.componentsHelper.getScale(_library)
    ,height: 90*prx.componentsHelper.getScale(_library)
    ,text: '970x90'
};
$.extend(prx.components.bannerad_iab_970x90, bannerBasicProps);


prx.components.bannerad_iab_300x600 = prx.componentsHelper.cloneobject(prx.components.bannerad_g_300x600);
prx.components.bannerad_iab_300x600.name = 'bannerad_iab_300x600';
prx.components.bannerad_iab_300x600.caption = 'Half Page 300x600';
prx.components.bannerad_iab_300x600.icon = '-1800px -800px';


prx.components.bannerad_iab_120x60 = {
    name: 'bannerad_iab_120x60'
    ,caption: 'Button 2 120x60'
    ,icon: '-1900px -800px'
    ,helper: prx.url.devices+'/'+_library+'/bannerad_120x60/helper.png'
    ,width: 120*prx.componentsHelper.getScale(_library)
    ,height: 60*prx.componentsHelper.getScale(_library)
    ,text: '120x60'
}
$.extend(prx.components.bannerad_iab_120x60, bannerBasicProps);


prx.components.bannerad_iab_88x31 = {
	name: 'bannerad_iab_88x31'
	,caption: 'Micro Bar 88x31'
    ,icon: '0 -900px'
	,helper: prx.url.devices+'/'+_library+'/bannerad_88x31/helper.png'
	,width: 88*prx.componentsHelper.getScale(_library)
	,height: 31*prx.componentsHelper.getScale(_library)
	,text: '88x31'
}
$.extend(prx.components.bannerad_iab_88x31, bannerBasicProps);


prx.components.bannerad_iab_970x250 = {
	name: 'bannerad_iab_970x250'
	,caption: 'Billboard 970x250'
    ,icon: '-100px -900px'
	,helper: prx.url.devices+'/'+_library+'/bannerad_970x250/helper.png'
	,width: 970*prx.componentsHelper.getScale(_library)
	,height: 250*prx.componentsHelper.getScale(_library)
	,text: '970x250'
}
$.extend(prx.components.bannerad_iab_970x250, bannerBasicProps);


prx.components.bannerad_iab_300x1050 = {
	name: 'bannerad_iab_300x1050'
	,caption: 'Portrait 300x1050'
    ,icon: '-200px -900px'
	,helper: prx.url.devices+'/'+_library+'/bannerad_300x1050/helper.png'
	,width: 300*prx.componentsHelper.getScale(_library)
	,height: 1050*prx.componentsHelper.getScale(_library)
	,text: '300x1050'
}
$.extend(prx.components.bannerad_iab_300x1050, bannerBasicProps);