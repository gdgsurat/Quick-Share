package com.gdgnitsurat.quickshare

<<<<<<< HEAD
import android.app.Activity
=======
>>>>>>> 297c98947ccd2ddd82ddcf3a8af3e7342cffa7f0
import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.util.Log
import android.view.Menu
import android.view.MenuItem
<<<<<<< HEAD
import com.firebase.ui.auth.AuthUI
import com.firebase.ui.auth.IdpResponse
import com.firebase.ui.auth.ResultCodes
import com.google.android.gms.tasks.OnCompleteListener
import com.google.android.gms.tasks.Task
import com.google.firebase.auth.FirebaseAuth
import java.util.*
=======
import android.view.View
import com.firebase.ui.auth.AuthUI
import com.google.firebase.auth.FirebaseAuth
import kotlinx.android.synthetic.main.activity_main.*
>>>>>>> 297c98947ccd2ddd82ddcf3a8af3e7342cffa7f0


class MainActivity : AppCompatActivity() {

<<<<<<< HEAD
    private val RC_SIGN_IN = 123
=======
    private lateinit var firebaseAuth: FirebaseAuth
    private var menu: Menu? = null
>>>>>>> 297c98947ccd2ddd82ddcf3a8af3e7342cffa7f0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

<<<<<<< HEAD
        val providers: List<AuthUI.IdpConfig> = Arrays.asList(
                AuthUI.IdpConfig.Builder(AuthUI.EMAIL_PROVIDER).build(),
                AuthUI.IdpConfig.Builder(AuthUI.GOOGLE_PROVIDER).build()
        )

        if (FirebaseAuth.getInstance().currentUser == null) {
            startActivityForResult(
                    AuthUI.getInstance().createSignInIntentBuilder().setAvailableProviders(providers).build()
                    , RC_SIGN_IN
            )
        }

    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.menu, menu)
        return true

=======
        firebaseAuth = FirebaseAuth.getInstance()

        signInButton.setOnClickListener { invalidateSignIn() }
    }

    private fun invalidateSignIn() {
        updateUI()
        if (!isUserSignedIn()) {
            startActivity(Intent(this, AuthUIActivity::class.java))
        }
    }

    private fun isUserSignedIn(): Boolean {
        return firebaseAuth.currentUser != null
    }

    private fun updateUI() {
        if (!isUserSignedIn()) {
            signInButton.visibility = View.VISIBLE
            menu?.findItem(R.id.menu_item_sign_out)?.isVisible = false
            textView.text = "Sign in to get started"
        } else {
            signInButton.visibility = View.INVISIBLE
            menu?.findItem(R.id.menu_item_sign_out)?.isVisible = true
            textView.text = firebaseAuth.currentUser?.email
        }
    }


    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        this.menu = menu
        menuInflater.inflate(R.menu.menu, menu)
        updateUI()
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem?): Boolean {
        when (item?.itemId) {
            R.id.menu_item_sign_out -> {
                if (isUserSignedIn()) {
                    AuthUI.getInstance()
                            .signOut(this)
                            .addOnCompleteListener {
                                Log.e("Auth : ", "Sign out successful")
                                updateUI()
                            }
                }
            }
        }

        return false
>>>>>>> 297c98947ccd2ddd82ddcf3a8af3e7342cffa7f0
    }

    override fun onOptionsItemSelected(item: MenuItem?): Boolean {
        if (item!!.itemId == R.id.sign_out) {
            AuthUI.getInstance().signOut(this)
                    .addOnCompleteListener(object : OnCompleteListener<Void> {
                        override fun onComplete(p0: Task<Void>) {
                            Log.e("SignOut", "Sign out Successful")
                            finish()
                            startActivity(intent)
                        }

                    })
        }
        return false
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (resultCode != Activity.RESULT_CANCELED) {
            if (requestCode == RC_SIGN_IN) {
                val response: IdpResponse = IdpResponse.fromResultIntent(data)!!
                if (resultCode == ResultCodes.OK) {
                    Log.e("SignIn Successful", FirebaseAuth.getInstance().currentUser.toString())
                } else {
                    Log.e("SignIn Failed", response.errorCode.toString())
                }

            }
        }

    }

}
