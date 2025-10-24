/api/sales	POST	Add a sale (fixed or negotiated)
/api/sales/:userId	GET	Fetch all sales by user
/api/expenses	POST	Add an expense
/api/expenses/:userId	GET	Fetch all expenses by user


from flask import Blueprint, request, redirect, url_for, render_template, jsonify
from flask_login import login_user, logout_user, login_required, current_user
from extensions import db, bcrypt
from models import User, Sale, Expense, BusinessProfile

business = Blueprint("business", __name__)

business.route('/business', methods=['GET', 'POST'])
@login_required
def business_setup():
    profile = BusinessProfile.query.filter_by(user_id=current_user.id).first()

    if request.method == 'POST':
        name = request.form['name']
        industry = request.form['industry']
        business_type = request.form['business_type']

        if profile:
            profile.name = name
            profile.industry = industry
            profile.business_type = business_type
#show that bsuiness details where updated
        else:
            profile = BusinessProfile(
                user_id=current_user.id,
                name=name,
                industry=industry,
                business_type=business_type
            )
            db.session.add(profile)
#show that bsuiness details was created successfully
        db.session.commit()
        return redirect(url_for('#SOMEWHERE'))

    return render_template('profile.html', profile=profile)

@business.route('/items', methods=['GET', 'POST'])
@login_required
def items():
    business_profile = BusinessProfile.query.filter_by(user_id=current_user.id).first()
    if not business_profile:
        # warn the user to create a business profile
        return redirect(url_for('#SOMEWHERE'))

    if request.method == 'POST':
        name = request.form['name']
        fixed_price = bool(request.form.get('fixed_price'))
        negotiable = bool(request.form.get('negotiable'))
        price_range_min = request.form.get('price_range_min')
        price_range_max = request.form.get('price_range_max')

        # item = Item(
        #     business_id=business_profile.id,
        #     name=name,
        #     fixed_price=float(fixed_price) if fixed_price and not negotiable else None,
        #     negotiable=negotiable,
        #     price_range_min=float(price_range_min) if negotiable else None,
        #     price_range_max=float(price_range_max) if negotiable else None
        # )


        # ADD DB.SESSION.ADD 
        db.session.commit()
        #show added successful message
        return redirect(url_for('#SOMEWHERE'))
    
    return render_template('#SOMEWHERE')


business.route('/api/sales', methods=['GET', 'POST'])

business.route('/api/expenses', methods=['GET', 'POST'])

business.route('/api/sales', methods=['GET', 'POST'])