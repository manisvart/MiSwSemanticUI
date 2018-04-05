/*
 * A wrapper for the Semantic UI library
 * https://semantic-ui.com/
 * 
 */

import {Element} from "./../MiSwDOM/MiSwDOM.js";

class SemanticUI extends Element {
	constructor(type) {
		super(type);
	}
	/* Add a text element */
	text(text) {
		new Element("text", text).attachTo(this);
		return this;
	}
// add(element) {
// element.attachTo(this);
// return this;
// }
	top() {
		this.addClass("top");
		return this;
	}
	/*
	 * Colors
	 */
	red() {
		this.addClass("red");
		return this;
	}
	orange() {
		this.addClass("orange");
		return this;
	}
	yellow() {
		this.addClass("yellow");
		return this;
	}
	olive() {
		this.addClass("olive");
		return this;
	}
	green() {
		this.addClass("green");
		return this;
	}
	teal() {
		this.addClass("teal");
		return this;
	}
	blue() {
		this.addClass("blue");
		return this;
	}
	violet() {
		this.addClass("violet");
		return this;
	}
	purple() {
		this.addClass("purple");
		return this;
	}
	pink() {
		this.addClass("pink");
		return this;
	}
	brown() {
		this.addClass("brown");
		return this;
	}
	grey() {
		this.addClass("grey");
		return this;
	}
	black() {
		this.addClass("black");
		return this;
	}
	inverted() {
		this.addClass("inverted");
		return this;
	}
	/*
	 * Sizes
	 */
	mini() {
		this.addClass("mini");
		return this;
	}
	tiny() {
		this.addClass("tiny");
		return this;
	}
	small() {
		this.addClass("small");
		return this;
	}
	medium() {
		this.addClass("medium");
		return this;
	}
	large() {
		this.addClass("large");
		return this;
	}
	big() {
		this.addClass("big");
		return this;
	}
	huge() {
		this.addClass("huge");
		return this;
	}
	massive() {
		this.addClass("massive");
		return this;
	}
	/*
	 * Shape modification
	 */
	rounded() {
		this.addClass("rounded");
		return this;
	}
	circular() {
		this.addClass("circular");
		return this;
	}
	compact() {
		this.addClass("compact");
		return this;
	}
	fluid() {
		this.addClass("fluid");
		return this;
	}
	right() {
		this.addClass("right floated");
		return this;
	}
	bordered() {
		this.addClass("bordered");
		return this;
	}
	/*
	 * State
	 */
	disable() {
		this.addClass("disabled");
		return this;
	}
	enable() {
		this.removeClass("disabled");
		return this;
	}
	hidden() {
		this.addClass("hidden");
		return this;
	}
}


/*
 * Buttons
 */
export class Button extends SemanticUI {
	constructor(optionalText, callback) {
		super("button");
		this.addClass("ui button");
		if (optionalText !== undefined)
			this.text(optionalText);

		if (callback) {
			this.dom().addEventListener("click", function () {
				callback();
			});
		}
	}
	primary() {
		this.addClass("primary");
		return this;
	}
	secondary() {
		this.addClass("secondary");
		return this;
	}
	positive() {
		this.addClass("positive");
		return this;
	}
	negative() {
		this.addClass("negative");
		return this;
	}
	basic() {
		this.addClass("basic");
		return this;
	}
}


/*
 * Icons
 */
export class IconGroup extends SemanticUI {
	constructor(icons) {
		super("i");
		this.addClass("icons");
		
		icons.forEach(function(icon){
			this.add(icon);
		});
	}
	
}
export class Icon extends SemanticUI {
	constructor(type) {
		super("i");
		this.addClass(type).addClass("icon");
	}
	fitted() {
		this.addClass("fitted");
		return this;
	}
	link() {
		this.addClass("link");
		return this;
	}
	horizontallyFlipped() {
		this.addClass("horizontally flipped");
		return this;
	}
	verticallyFlipped() {
		this.addClass("vertically flipped");
		return this;
	}
	clockwiseRotated() {
		this.addClass("clockwise rotated");
		return this;
	}
	counterclockwiseRotated() {
		this.addClass("counterclockwise rotated");
		return this;
	}
	corner() {
		this.addClass("corner");
		return this;
	}
}

/*
 * Image
 */

export class Image extends SemanticUI {
	constructor(src) {
		super("img", src);
		this.addClass("image");
	}
	avatar() {
		this.addClass("avatar");
		return this;
	}
}

export class SVGImage extends SemanticUI {
	constructor(src) {
		super(svg);
		this.add(this._img = new Element("img")
			.attribute({"xmlns:xlink":"http://www.w3.org/1999/xlink"})
			.attribute({"xmlns:href":src})
		);
		this._img.addClass("image");
	}	
	avatar() {
		this._img.addClass("avatar");
		return this;
	}
}




export class TextField extends SemanticUI {
	constructor(optionalText) {
		super("div");

		this._input = new Element("input")
		.attribute({type: "text", placeholder: optionalText});

		this
		.addClass("ui input")
		.add(this._input);
	}
	icon(iconType) {
		var icon = new Icon(iconType);
		this
		.addClass("icon")
		.add(icon)
		;
		return this;
	}
	readValue() {
		return this._input.dom().value;
	}
	updateValue(value) {
		this._input.dom().value = value;
		return this;
	}
}

export class NumericField extends SemanticUI {
	constructor(optionalText, units, unitChangeFun) {
		super("div");

		this._dropdown = new Element("div")
		.addClass("ui dropdown label")
		;
		var text = new Element("div")
		.addClass("text")
		.add(new Element("text", units[0]))
		;
		var icon = new Icon("dropdown");

		var menu = new Element("div").addClass("menu");
		units.forEach(function (unit) {
			menu.add(new Element("div")
			.addClass("item")
			.add(new Element("text", unit))
			);
		}, this);

		this._input = new Element("input")
		.attribute({type: "number", placeholder: optionalText});

		this
		.addClass("ui input right labeled")
		.add(this._input)
		.add(this._dropdown
				.add(text)
				.add(icon)
				.add(menu)
		)
		;

		$(this._dropdown.dom()).dropdown({
			onChange: function (value, text, $selectedItem) {
				if (value !== undefined && text !== undefined) {
					unitChangeFun(value);
				}
			}
		});

	}
	readValue() {
		return this._input.dom().value;
	}
	readUnit() {
		return $(this._dropdown.dom())
		.dropdown('get value')
		;
	}
	updateValue(value) {
		this._input.dom().value = value;
		return this;
	}
	updateUnit(unit) {
		$(this._dropdown.dom())
		.dropdown('set selected', unit)
		;
		return this;
	}
}

export class TextBox extends SemanticUI {
	constructor(optionalText) {
		super("div");
		if (optionalText !== undefined)
			this.text(optionalText);
	}
	updateValue(value) {
		this.removeChildren();
		this.text(value);
		return this;
	}
}


export class SearchField extends SemanticUI {
	constructor(optionalText) {
		super("div");

		this._input = new Element("input")
		.attribute({type: "text", placeholder: optionalText})
		.addClass("prompt")
		;

		var icon = new Icon("search");

		this
		.addClass("ui search")
		.add(new Element("div").addClass("ui icon input")
				.add(this._input)
				.add(icon)
		)
		.add(new Element("div").addClass("result"))
		;
	}
	readValue() {
		return this._input.dom().value;
	}
	updateValue(value) {
		this._input.dom().value = value;
		return this;
	}
}



export class Label extends SemanticUI {
	constructor(optionalText) {
		super("div");
		this.addClass("ui label basic");
		if (optionalText !== undefined)
			this.text(optionalText);
	}
	rightPointing() {
		this.addClass("right pointing");
		return this;
	}
	leftPointing() {
		this.addClass("left pointing");
		return this;
	}
}

export class Message extends SemanticUI {
	constructor(optionalText) {
		super("div");
		this.addClass("ui message");
		if (optionalText !== undefined)
			this.text(optionalText);
	}
	icon(iconType) {
		this.addClass("icon");
		this.add(new Icon(iconType));
		return this;
	}
	error() {
		this.addClass("negative");
		return this;
	}
}

export class Header extends SemanticUI {
	constructor(optionalText) {
		super("div");
		this.addClass("header");
		if (optionalText !== undefined)
			this.text(optionalText);
	}
}

export class Content extends SemanticUI {
	constructor(optionalText) {
		super("div");
		this.addClass("content");
		if (optionalText !== undefined)
			this.text(optionalText);
	}
}

export class Sidebar extends SemanticUI {
	constructor(optionalText) {
		super("div");

		this._closable = true;
		this._transition = "";
		this._dimPage = true;

		this.addClass("ui sidebar");
		if (optionalText !== undefined)
			this.text(optionalText);
	}
	pusher(element) {
		element.addClass("pusher");
		document.body.insertBefore(this.dom(), element.dom());
		return this;
	}
	closable() {
		this._closable = true;
		return this;
	}
	notClosable() {
		this._closable = false;
		return this;
	}
	dimPage() {
		this._dimPage = true;
		return this;
	}
	dontDimPage() {
		this._dimPage = false;
		return this;
	}
	scaleDown() {
		this._transition = "scale down";
		return this;
	}
	execute() {
		$(this.dom()).sidebar({
			transition: this._transition,
			closable: this._closable,
			dimPage: this._dimPage
		});
		return this;
	}
	show() {
		$(this.dom()).sidebar('show')
		;
		return this;
	}
	pushPage() {
		$(this.dom()).sidebar('push page')
		;
		return this;
	}
}

export class DropDown extends SemanticUI {
	constructor(icon, values, fun, text) {
		super("span");

		this
// .addClass("ui dropdown")
		.addClass("ui selection dropdown")
		;

		new Element("input").attribute({type: "hidden"}).attachTo(this);
		if (icon)
			icon.attachTo(this);

		if (text) {
			new Element("div")
			.addClass("default text")
			.add(new Element("text", text))
			.attachTo(this)
			;
		}

		var menu = new Element("div").addClass("menu").attachTo(this);


		values.forEach(function (v) {
			new Element("div")
			.addClass("item")
			.dataset({value: v.value})
			.addChildren([new Element("text", v.name)])
			.attachTo(menu)
			;
		}, this);

		$(this.dom()).dropdown({
			onChange: function (value, text, $selectedItem) {
				if (value !== undefined && text !== undefined) {
					fun(value);
				}
			}
		});
	}
	clear() {
		$(this.dom()).dropdown('clear');

		/* Ugly hack */
// this.readChild(2).forEach(function (child) {
// child.classList.remove("active");
// child.classList.remove("selected");
// });

		$(this.dom()).dropdown('hide');

	}
}

export class DDButton extends SemanticUI {
	constructor(buttonText, color = "", callback) {
		super("span");
		this.value_ = "";
		this.items_ = []; /* The items in the dropdown */

		this.addClass("ui").addClass(color).addClass("buttons");
		this.add(new Element("div").addClass("ui button").add(new Element("text", buttonText)));
		this.add(this.dropdown_ = new Element("div").addClass("ui floating dropdown icon button")
				.add(new Icon("dropdown"))
				.add(this.menu_ = new Element("div").addClass("menu")));

		var this_ = this;
		$(this.dropdown_.dom()).dropdown({
			onChange: function (value, text, $selectedItem) {
				this_.value_ = value;
				callback(value, text, $selectedItem);
			}
		});
	}
	addMenuItem(menuText, dataValue, initialState = "") {
		var item;
		this.menu_.add(item = new Element("div").addClass("item").dataset({value: dataValue}).addClass(initialState).add(new Element("text", menuText)));
		this.items_.push(item);

		return this;
	}
	addmenuItemWithIcon(icon, menuText, dataValue, initialState = "") {
		var item;
		this.menu_.add(item = new Element("div").addClass("item").dataset({value: dataValue}).addClass(initialState).add(new Icon(icon)).add(new Element("text", menuText)));
		this.items_.push(item);

		return this;
	}
	disableItems(itemList) {
		itemList.forEach(function (item) {
			this.items_[item].addClass("disabled");
		}, this);
		return this;
	}
	enableItems(itemList) {
		itemList.forEach(function (item) {
			this.items_[item].removeClass("disabled");
		}, this);
		return this;
	}
	readValue() {
		return this.value_;
	}
	select(value) {
		this.value_ = value;
		$(this.dropdown_.dom()).dropdown("set selected", value);
	}
}

export class MultiSelect extends SemanticUI {
	constructor(buttonText, color = "", callback) {
		super("div");
		this
		.add(this.select_ = new Element("select")
		.addClass("ui fluid search dropdown")
		.attribute({multiple: "x"})
		)
		.addMenuItem(buttonText, "")
		;

		var x = $(this.select_.dom()).dropdown({
			onChange: function (value, text, $selectedItem) {
				callback(value, text, $selectedItem);
			},
			sortSelect: true
		});

		this.select_.dom().parentNode.style["background-color"] = color;
	}
	addMenuItem(menuText, dataValue) {
		this.select_.add(
				new Element("option")
				.attribute({value: dataValue})
				.add(new Element("text", menuText))
		);

		return this;
	}
}

export class Select extends SemanticUI {
	constructor(buttonText, color = "", callback) {
		super("span");
		this.items_ = []; /* The items in the dropdown */
		this
		.addClass("ui selection dropdown")
// .add(new Element("input").attribute({type:"hidden"}))
		.add(new Icon("dropdown"))
		.add(new Element("text", buttonText)).addClass("default text")
		.add(this.menu_ = new Element("div").addClass("menu"))
		;

		$(this.dom()).dropdown({
			onChange: function (value, text, $selectedItem) {
				callback(value, text, $selectedItem);
			},
			sortSelect: true
		});

		this.menu_.dom().parentNode.style["background-color"] = color;
	}
	addMenuItem(menuText, dataValue, initialState = "") {
// console.log({menuText, dataValue, initialState});
		var item;
		this.menu_.add(item =
			new Element("div")
		.addClass("item").addClass(initialState)
		.dataset({value: dataValue})
		.add(new Element("text", menuText))
		);
		this.items_.push(item);

		return this;
	}
	disableItems(itemList) {
		itemList.forEach(function (item) {
			this.items_[item].addClass("disabled");
// this.menu_.readChild(item).addClass("disabled");
		}, this);
		return this;
	}
	enableItems(itemList) {
		itemList.forEach(function (item) {
			this.items_[item].removeClass("disabled");
// this.menu_.readChild(item).removeClass("disabled");
		}, this);
		return this;
	}
}





export class Table extends SemanticUI {
	constructor() {
		super("table");

		this
		.addClass("ui celled table")
		;

	}
}

export class TableRow extends SemanticUI {
	constructor() {
		super("tr");
	}
}

export class TableData extends SemanticUI {
	constructor(optionalText) {
		super("td");

		if (optionalText !== undefined)
			this.text(optionalText);
	}
}

export class TableHead extends SemanticUI {
	constructor() {
		super("thead");

		this
		.add(new TableRow)
		;
	}
}

export class TableHeader extends SemanticUI {
	constructor(optionalText) {
		super("th");

		if (optionalText !== undefined)
			this.text(optionalText);
	}
}

export class PropList extends Element {
	constructor(eMap_properties, eTuple_deviceID) {
		super("div");
		this._deviceID = eTuple_deviceID;
		this._table = new Table()
		.add(new TableHead()
		.add(new TableHeader("Property"))
		.add(new TableHeader("Value"))
		.add(new TableHeader("Type"))
		)
		.attachTo(this)
		;

		var eList_keyList = eMap_properties.keys();
		eList_keyList.forEach(function (key) {
			var eMap_property = eMap_properties.value(key);
			var eAtom_valueType = eMap_property.valueAtom("value_type");
			var eList_actions = eMap_property.valueAtom("actions");

			/*
			 * Create a valueless object of the right kind so we can use its
			 * methods
			 */
			var cdt = CDT.cdt_decode(new Erlang.eTuple_([eAtom_valueType, undefined]));
			cdt.updateDeviceID(eTuple_deviceID);
			cdt.updateProperty(key);

			var actionType;
			if (eList_actions.indexOfAtom("display") >= 0)
				actionType = cdt.display();
			if (eList_actions.indexOfAtom("edit") >= 0)
				actionType = cdt.edit(function (newValue) {
					var [module, attribute] = key.value(); /* {'base', 'name'} */
					WS.WS.updateProperty(eTuple_deviceID, module, attribute, newValue);
				});

			this._table
			.add(new TableRow()
			.add(new TableData(key.toString()))

// .add(new TableData(eList_actions.toString()))
			.add(new TableData().add(actionType))

			.add(new TableData()
			.add(new Label(eAtom_valueType.toString())
			.leftPointing()
			)
			)
			);
		}, this);
	}
}


